"""NexBuild Design Agents — multi-discipline AI agents.

Agents:
    - InteriorAgent (nội thất)
    - ArchitectureAgent (kiến trúc)
    - StructuralAgent (kết cấu xây dựng)

Each agent has:
    - 1500+ chars detailed system prompt
    - Vietnamese knowledge base (materials, codes, standards)
    - Strict JSON output schema for frontend compatibility
"""
from api.services.agents.base_agent import BaseAgent

__all__ = ["BaseAgent"]
