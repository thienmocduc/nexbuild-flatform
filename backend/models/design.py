"""Design, DesignRender, BOQItem models — NexDesign AI module."""
import uuid
from datetime import datetime, timezone

from sqlalchemy import BigInteger, Boolean, DateTime, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy import JSON
from api.core.types import CUUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from api.core.database import Base


class Design(Base):
    __tablename__ = "designs"

    id: Mapped[uuid.UUID] = mapped_column(CUUID(), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(CUUID(), ForeignKey("users.id"), nullable=False, index=True)
    prompt: Mapped[str] = mapped_column(Text, nullable=False)
    style: Mapped[str | None] = mapped_column(String(50))
    room_type: Mapped[str | None] = mapped_column(String(50))
    area_m2: Mapped[float | None] = mapped_column(Numeric(10, 2))
    budget_million: Mapped[float | None] = mapped_column(Numeric(12, 2))
    status: Mapped[str] = mapped_column(String(20), default="pending", index=True)
    task_id: Mapped[str | None] = mapped_column(String(100))
    ai_response: Mapped[dict | None] = mapped_column(JSON)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))

    renders = relationship("DesignRender", back_populates="design", lazy="selectin")
    boq_items = relationship("BOQItem", back_populates="design", lazy="selectin")


class DesignRender(Base):
    __tablename__ = "design_renders"

    id: Mapped[uuid.UUID] = mapped_column(CUUID(), primary_key=True, default=uuid.uuid4)
    design_id: Mapped[uuid.UUID] = mapped_column(CUUID(), ForeignKey("designs.id", ondelete="CASCADE"), nullable=False, index=True)
    variant_idx: Mapped[int] = mapped_column(Integer, default=0)
    image_url: Mapped[str | None] = mapped_column(Text)
    thumbnail_url: Mapped[str | None] = mapped_column(Text)
    style_label: Mapped[str | None] = mapped_column(String(100))
    description: Mapped[str | None] = mapped_column(Text)
    selected: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    design = relationship("Design", back_populates="renders")


class BOQItem(Base):
    __tablename__ = "boq_items"

    id: Mapped[uuid.UUID] = mapped_column(CUUID(), primary_key=True, default=uuid.uuid4)
    design_id: Mapped[uuid.UUID] = mapped_column(CUUID(), ForeignKey("designs.id", ondelete="CASCADE"), nullable=False, index=True)
    category: Mapped[str | None] = mapped_column(String(100))
    material: Mapped[str | None] = mapped_column(String(255))
    product_name: Mapped[str | None] = mapped_column(String(255))
    unit: Mapped[str | None] = mapped_column(String(20))
    quantity: Mapped[float | None] = mapped_column(Numeric(10, 2))
    unit_price: Mapped[int | None] = mapped_column(BigInteger)
    total_price: Mapped[int | None] = mapped_column(BigInteger)
    supplier_id: Mapped[uuid.UUID | None] = mapped_column(CUUID())
    order_status: Mapped[str] = mapped_column(String(20), default="unordered")
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    design = relationship("Design", back_populates="boq_items")
