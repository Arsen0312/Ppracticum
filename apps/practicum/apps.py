from django.utils.translation import gettext_lazy as _
from django.apps import AppConfig


class PracticumConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.practicum"
    verbose_name = _("Практикум")
