from enum import Enum

from tortoise.fields import (
    CharEnumField,
    DatetimeField,
    ForeignKeyField,
    IntField,
    ManyToManyField,
    UUIDField,
)
from tortoise.fields.data import BooleanField, CharField, TextField
from tortoise.fields.relational import ManyToManyRelation, OneToOneField
from tortoise.models import Model

URL_LENGTH = 200
ENUM_LENGTH = 10
NORMAL_CHAR_LENGTH = 50
PASSWORD_LENGTH = 200


class UserRole(str, Enum):
    USER = "USER"
    ADMIN = "ADMIN"
    AUTHOR = "AUTHOR"


class UserTeam(str, Enum):
    HR = "HR"
    TECHNICAL = "TECHNICAL"
    CONTENT = "CONTENT"


class DateTimeMixin:
    created_at = DatetimeField(null=True, auto_now_add=True)
    modified_at = DatetimeField(null=True, auto_now=True)


class UserMeta(DateTimeMixin, Model):
    id = IntField(pk=True, description="Id of the user meta model")
    name = CharField(max_length=NORMAL_CHAR_LENGTH)
    photo = CharField(max_length=URL_LENGTH)
    district = CharField(max_length=NORMAL_CHAR_LENGTH)
    is_district_rep = BooleanField(default=False)
    is_team_lead = BooleanField(default=False)
    is_executive = BooleanField(default=False)
    team = CharEnumField(
        enum_type=UserTeam, description="Team of the user", max_length=ENUM_LENGTH
    )

    class Meta:
        table = "user_meta"


class UserModel(DateTimeMixin, Model):
    id = IntField(pk=True, description="User Id to identify the user")
    email = CharField(
        max_length=NORMAL_CHAR_LENGTH,
        description="Email of the user",
        unique=True,
        index=True,
    )
    password = CharField(max_length=PASSWORD_LENGTH, description="Password of the user")
    verified = BooleanField(default=False)
    role = CharEnumField(
        enum_type=UserRole, description="Role of the user", max_length=ENUM_LENGTH
    )
    meta = OneToOneField("main.UserMeta", related_name="user")

    class Meta:
        table = "user"


class BlogModel(DateTimeMixin, Model):
    id = UUIDField(pk=True, description="Blog Id of the blog written by the user")
    url = CharField(max_length=URL_LENGTH, unique=True, descrption="URL of the image")
    author = ForeignKeyField("main.UserModel", related_name="blog")

    class Meta:
        table = "blog"


class ImageCategoryModel(DateTimeMixin, Model):
    id = IntField(pk=True, description="Id of the image category")
    name = CharField(
        unique=True,
        index=True,
        max_length=NORMAL_CHAR_LENGTH,
        description="Name of the image category",
    )

    class Meta:
        table = "image_category"


class ImageModel(DateTimeMixin, Model):
    id = UUIDField(pk=True, description="Id of the image")
    url = CharField(max_length=URL_LENGTH)

    class Meta:
        table = "image"


class EventModel(DateTimeMixin, Model):
    id = IntField(pk=True, descrption="Id of the event")
    name = CharField(max_length=NORMAL_CHAR_LENGTH, unique=True)
    description = TextField()
    images: ManyToManyRelation["ImageModel"] = ManyToManyField(
        "main.ImageModel", through="event_image", related_name="event"
    )

    class Meta:
        table = "event"
