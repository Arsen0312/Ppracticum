from django.utils.translation import gettext_lazy as _
from django.apps import AppConfig


class OutsourcingConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.outsourcing"
    verbose_name = _("Аутсорсинг")
