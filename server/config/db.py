"""
Database related settings from environment variables are read here
"""

from pydantic import BaseSettings, PostgresDsn

__all__ = ("db_settings",)


class DbSettings(BaseSettings):
    URI: PostgresDsn

    class Config:  # type: ignore
        env_prefix = "DB_"
        env_file = ".env"


db_settings = DbSettings()  # type: ignore
