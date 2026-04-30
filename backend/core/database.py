"""Async database engine + session factory.

Production: ZeniCloud Cloud SQL PostgreSQL 16 (managed) — connections may be
killed by Cloud SQL after idle timeout (~10 min) or by network proxies in
Railway/Cloud Run. We use:
- pool_pre_ping=True: cheap SELECT 1 before each checkout — auto-reconnects
- pool_recycle=300: recycle connections every 5 min (before Cloud SQL kills)
- pool_size + max_overflow: from settings (default 20 + 10 = 30 max concurrent)

Local dev (SQLite): no pool tuning needed.
"""
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from api.core.config import get_settings

settings = get_settings()

# Build engine kwargs — defensive against managed-DB connection drops
_engine_kwargs: dict = {"echo": settings.DEBUG}

if "sqlite" not in settings.DATABASE_URL:
    # PostgreSQL / managed DB tuning — recover from killed idle connections
    _engine_kwargs.update({
        "pool_size": settings.DB_POOL_SIZE,
        "max_overflow": settings.DB_MAX_OVERFLOW,
        "pool_pre_ping": True,    # SELECT 1 before checkout → reconnect if dead
        "pool_recycle": 300,      # recycle every 5 min (Cloud SQL idle ~10min)
        "pool_timeout": 30,       # wait up to 30s for available connection
    })

engine = create_async_engine(settings.DATABASE_URL, **_engine_kwargs)

async_session = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


async def get_db() -> AsyncSession:
    """FastAPI dependency — yields async session, auto-closes.

    Auto-rollback on exception, auto-commit on success, always close at end.
    """
    async with async_session() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
