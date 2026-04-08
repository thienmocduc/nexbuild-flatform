"""Design AI request/response schemas."""
from typing import Optional
from uuid import UUID

from pydantic import BaseModel, Field


class GenerateRequest(BaseModel):
    prompt: str = Field(..., min_length=10, max_length=2000)
    style: str = Field("modern", pattern=r"^(modern|scandinavian|japandi|industrial|mediterranean|biophilic)$")
    room_type: Optional[str] = None
    area_m2: Optional[float] = Field(None, ge=5, le=500)
    budget_million: Optional[float] = Field(None, ge=0)
    auto_boq: bool = True
    shoppable: bool = True


class DesignVariant(BaseModel):
    variant_idx: int
    style_label: str
    description: str
    image_url: Optional[str] = None
    thumbnail_url: Optional[str] = None


class BOQItemResponse(BaseModel):
    id: Optional[str] = None
    category: str
    material: str
    product_name: str
    unit: str
    quantity: float
    unit_price: int
    total_price: int

    model_config = {"from_attributes": True}


class GenerateResponse(BaseModel):
    design_id: str
    status: str
    variants: list[DesignVariant]
    boq_items: list[BOQItemResponse]
    boq_total: int
    prompt_enhanced: str
    message: str


class DesignHistoryItem(BaseModel):
    id: str
    prompt: str
    style: Optional[str] = None
    room_type: Optional[str] = None
    area_m2: Optional[float] = None
    status: str
    created_at: str
    variant_count: int = 0
    boq_total: int = 0

    model_config = {"from_attributes": True}


class QuotaResponse(BaseModel):
    plan: str
    used: int
    limit: int
    remaining: int
    reset_date: Optional[str] = None
