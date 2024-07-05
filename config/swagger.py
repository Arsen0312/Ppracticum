from django.urls import path
from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Practicum API",
        default_version="v1",
        description="API documentation for Practicum project.",
        terms_of_service="https://github.com/Dastan-Oskonbaev",
        contact=openapi.Contact(email="contact@practicum.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.IsAdminUser],
)


urlpatterns = [
    path(
        "api/docs<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json"
    ),
    path(
        "api/docs/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path(
        "api/redocs/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="schema-redoc",
    ),
]
