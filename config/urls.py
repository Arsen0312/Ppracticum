from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from .swagger import urlpatterns as swagger_yasg


api_patterns = [
    # path("", include("")),
]


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include(api_patterns)),
] + swagger_yasg


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
