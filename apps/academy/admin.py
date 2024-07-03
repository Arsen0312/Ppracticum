from django.contrib import admin

from apps.academy.forms import CourseValidateForm
from .models import Course, Skill, Advantage


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    form = CourseValidateForm
    list_display = ("title", "duration", "rating", "created_at", "updated_at")
    list_filter = ("duration", "rating", "created_at")
    search_fields = ("title", "description", "purpose")
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "title",
                    "description",
                    "purpose",
                    "duration",
                    "tag",
                    "icon",
                    "rating",
                )
            },
        ),
        (
            "Ссылки и изображения",
            {"fields": ("trial_lesson", "background_person"), "classes": ("collapse",)},
        ),
        (
            "Навыки и преимущества",
            {"fields": ("skills", "advantages"), "classes": ("collapse",)},
        ),
        (
            "Временные метки",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )
    readonly_fields = ("created_at", "updated_at")
    filter_horizontal = ("skills", "advantages")
    date_hierarchy = "created_at"
    ordering = ("-created_at",)


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title", "description")


@admin.register(Advantage)
class AdvantageAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title", "description")
