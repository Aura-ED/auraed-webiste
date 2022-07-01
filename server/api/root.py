from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise

from tortoise_config import tortoise_config

app = FastAPI(title="AuraEd API", description="API Server for AuraEd website")

# Register tortoise ORM and link it with fastAPI app
# and adds lifecycle hooks for startup/ shutdown
register_tortoise(app=app, config=tortoise_config)

# Include created routers
# app.include_router()
