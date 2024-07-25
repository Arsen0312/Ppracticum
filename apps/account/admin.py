from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from apps.account.forms import TeacherForm

from .models import Teacher, Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("phone", "email", "facebook", "instagram", "whatsapp", "telegram")
    search_fields = ("phone", "email", "facebook", "instagram", "whatsapp", "telegram")
    list_filter = ("phone", "email")
    readonly_fields = ("created_at", "updated_at")

    fieldsets = (
        (
            _("Контактная информация"),
            {
                "fields": (
                    "phone",
                    "email",
                    "facebook",
                    "instagram",
                    "whatsapp",
                    "telegram",
                )
            },
        ),
        (_("Временные метки"), {"fields": ("created_at", "updated_at")}),
    )


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    form = TeacherForm
    list_display = ("first_name", "last_name", "patronymic", "rating", "role")
    search_fields = ("first_name", "last_name", "patronymic", "role")
    list_filter = ("rating", "role")
    ordering = ("last_name", "first_name")

    fieldsets = (
        (_("Личная информация"), {"fields": ("first_name", "last_name", "patronymic")}),
        (_("Контактная информация"), {"fields": ("contacts",)}),
        (
            _("Профессиональная информация"),
            {
                "fields": (
                    "rating",
                    "avatar",
                    "role",
                    "courses",
                    "description",
                    "experience",
                )
            },
        ),
        (_("Временные метки"), {"fields": ("created_at", "updated_at")}),
    )
    filter_horizontal = ("courses",)
    readonly_fields = ("created_at", "updated_at")
