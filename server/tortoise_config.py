from config import db_settings

db_config = db_settings.URI

tortoise_config = {
    "connections": {
        "default": {
            "engine": "tortoise.backends.asyncpg",
            "credentials": {
                "database": db_config.query,
                "host": db_config.host,
                "password": db_config.password,
                "port": db_config.port,
                "user": db_config.user,
            },
        }
    },
    "apps": {
        "main": {"models": ["models", "aerich.models"], "default_connection": "default"}
    },
}
