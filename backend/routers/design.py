"""NexDesign AI router — generate designs, BOQ, quota, history."""
from typing import Optional
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from api.core.database import get_db
from api.core.security import get_current_user
from backend.models.design import BOQItem, Design, DesignRender
from backend.schemas.design import GenerateRequest, QuotaResponse
from backend.services.design_service import check_quota, create_design

router = APIRouter(prefix="/design", tags=["NexDesign AI"])


@router.post("/generate")
async def generate(
    req: GenerateRequest,
    current_user=Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Tạo thiết kế AI — Gemini generate 4 phương án + BOQ.

    Free: 3 renders/tháng. Pro: unlimited.
    Cost per request: ~$0.001 (Gemini 2.0 Flash).
    """
    result = await create_design(
        user=current_user,
        prompt=req.prompt,
        style=req.style,
        room_type=req.room_type,
        area_m2=req.area_m2,
        budget_million=req.budget_million,
        auto_boq=req.auto_boq,
        db=db,
    )

    if result.get("error"):
        raise HTTPException(
            status_code=429 if "hết lượt" in result.get("message", "") else 500,
            detail=result["message"],
        )

    return result


@router.get("/quota", response_model=QuotaResponse)
async def get_quota(
    current_user=Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Check quota còn lại — hiển thị trên header pill."""
    quota = await check_quota(current_user, db)
    return QuotaResponse(**quota)


@router.get("/history")
async def list_history(
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    current_user=Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Lịch sử thiết kế của user."""
    query = select(Design).where(
        Design.user_id == current_user.id
    ).order_by(Design.created_at.desc())

    result = await db.execute(query.offset((page - 1) * limit).limit(limit))
    designs = result.scalars().all()

    items = []
    for d in designs:
        boq_total = sum(b.total_price or 0 for b in d.boq_items)
        items.append({
            "id": str(d.id),
            "prompt": d.prompt,
            "style": d.style,
            "room_type": d.room_type,
            "area_m2": float(d.area_m2) if d.area_m2 else None,
            "status": d.status,
            "created_at": d.created_at.isoformat(),
            "variant_count": len(d.renders),
            "boq_total": boq_total,
        })

    return {"items": items, "page": page}


@router.get("/history/{design_id}")
async def get_design(
    design_id: UUID,
    current_user=Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Chi tiết 1 thiết kế — variants + BOQ."""
    result = await db.execute(
        select(Design).where(Design.id == design_id)
    )
    design = result.scalar_one_or_none()
    if not design:
        raise HTTPException(404, "Thiết kế không tồn tại")
    if design.user_id != current_user.id:
        raise HTTPException(403, "Không có quyền xem")

    variants = [
        {
            "variant_idx": r.variant_idx,
            "style_label": r.style_label,
            "description": r.description,
            "image_url": r.image_url,
            "selected": r.selected,
        }
        for r in design.renders
    ]

    boq_items = [
        {
            "id": str(b.id),
            "category": b.category,
            "material": b.material,
            "product_name": b.product_name,
            "unit": b.unit,
            "quantity": float(b.quantity) if b.quantity else 0,
            "unit_price": b.unit_price or 0,
            "total_price": b.total_price or 0,
            "order_status": b.order_status,
        }
        for b in design.boq_items
    ]

    boq_total = sum(b["total_price"] for b in boq_items)

    return {
        "id": str(design.id),
        "prompt": design.prompt,
        "prompt_enhanced": design.ai_response.get("prompt_enhanced", design.prompt) if design.ai_response else design.prompt,
        "style": design.style,
        "room_type": design.room_type,
        "area_m2": float(design.area_m2) if design.area_m2 else None,
        "status": design.status,
        "created_at": design.created_at.isoformat(),
        "variants": variants,
        "boq_items": boq_items,
        "boq_total": boq_total,
    }


@router.get("/boq/saved")
async def list_saved_boqs(
    current_user=Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """DS BOQ đã lưu (designs có status=done)."""
    result = await db.execute(
        select(Design).where(
            Design.user_id == current_user.id,
            Design.status == "done",
        ).order_by(Design.created_at.desc()).limit(50)
    )
    designs = result.scalars().all()

    boqs = []
    for d in designs:
        items = d.boq_items
        total = sum(b.total_price or 0 for b in items)
        if total > 0:
            boqs.append({
                "design_id": str(d.id),
                "prompt": d.prompt,
                "style": d.style,
                "item_count": len(items),
                "total": total,
                "created_at": d.created_at.isoformat(),
            })

    return {"items": boqs}
