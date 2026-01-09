from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from config import settings

engine = create_engine(settings.DATABASE_URL)
session = sessionmaker(bind=engine, autocommit=False, autoflush=False)

