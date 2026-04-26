"""BaseAgent — shared Gemini client + JSON parsing + retry logic.

All discipline agents (Interior, Architecture, Structural) inherit from this
class and override `discipline`, `system_prompt`, `build_user_prompt()`, and
`enrich_response()`.
"""
from __future__ import annotations

import json
import logging
import os
from typing import Any, Optional

import httpx

logger = logging.getLogger(__name__)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-flash-latest")
GEMINI_URL = (
    f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"
)
GEMINI_TIMEOUT = float(os.getenv("GEMINI_TIMEOUT", "60"))


class BaseAgent:
    """Base class — every discipline agent extends this."""

    discipline: str = "base"
    system_prompt: str = ""
    temperature: float = 0.8
    max_output_tokens: int = 8192

    # ────────────────────────────────────────────────────────────
    # Public API — subclasses override the 3 hooks below
    # ────────────────────────────────────────────────────────────
    def build_user_prompt(self, request: Any) -> str:
        """Build the user-facing prompt from a GenerateRequest."""
        raise NotImplementedError

    def fallback_response(self, request: Any) -> dict:
        """Return demo data when Gemini API key is missing or fails."""
        raise NotImplementedError

    def enrich_response(self, raw: dict, request: Any) -> dict:
        """Post-process Gemini output (validate prices, add KB references)."""
        return raw

    # ────────────────────────────────────────────────────────────
    # Main entrypoint
    # ────────────────────────────────────────────────────────────
    async def generate(self, request: Any) -> dict:
        """Call Gemini → parse JSON → enrich → return."""
        if not GEMINI_API_KEY:
            logger.warning("[%s] GEMINI_API_KEY missing — using fallback", self.discipline)
            return self.fallback_response(request)

        user_prompt = self.build_user_prompt(request)
        full_prompt = self.system_prompt + "\n\n---\n\n" + user_prompt

        try:
            async with httpx.AsyncClient(timeout=GEMINI_TIMEOUT) as client:
                resp = await client.post(
                    GEMINI_URL,
                    params={"key": GEMINI_API_KEY},
                    json={
                        "contents": [
                            {"role": "user", "parts": [{"text": full_prompt}]}
                        ],
                        "generationConfig": {
                            "temperature": self.temperature,
                            "topP": 0.95,
                            "maxOutputTokens": self.max_output_tokens,
                            "responseMimeType": "application/json",
                        },
                    },
                )

                if resp.status_code != 200:
                    logger.error(
                        "[%s] Gemini HTTP %d: %s",
                        self.discipline, resp.status_code, resp.text[:300]
                    )
                    return self.fallback_response(request)

                data = resp.json()
                text = data["candidates"][0]["content"]["parts"][0]["text"]
                raw = json.loads(text)
                return self.enrich_response(raw, request)
        except (httpx.HTTPError, KeyError, json.JSONDecodeError) as e:
            logger.exception("[%s] generate failed: %s", self.discipline, e)
            return self.fallback_response(request)

    # ────────────────────────────────────────────────────────────
    # Helper utilities for subclasses
    # ────────────────────────────────────────────────────────────
    @staticmethod
    def vnd_int(value: Any, default: int = 0) -> int:
        """Coerce value to int VND, never negative."""
        try:
            v = int(float(value))
            return v if v > 0 else default
        except (TypeError, ValueError):
            return default

    @staticmethod
    def safe_str(value: Any, default: str = "") -> str:
        """Coerce to non-empty string."""
        s = str(value).strip() if value is not None else ""
        return s if s else default

    @staticmethod
    def clamp(value: float, lo: float, hi: float) -> float:
        return max(lo, min(hi, value))
