from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include



api_patterns = [
    path("academy/", include("apps.academy.urls")),
    path("practicum/", include("apps.practicum.urls")),
    path("account/", include("apps.account.urls")),
    path("outsourcing/", include("apps.outsourcing.urls")),
    path("admin/", admin.site.urls),
    path("api/v1/", include(api_patterns)),


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
