from django.contrib import admin
from .models import Lead, Benefit, Review, FounderSection


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("full_name", "phone", "email", "created_at", "updated_at")
    search_fields = ("full_name", "phone", "email")
    list_filter = ("created_at", "updated_at")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("full_name", "phone", "email")}),
        (
            "Временные метки",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )


@admin.register(Benefit)
class BenefitAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "description", "created_at", "updated_at")
    search_fields = ("title",)
    list_filter = ("created_at", "updated_at")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("icon", "title", "description")}),
        (
            "Временные метки",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("author", "body", "created_at", "updated_at")
    search_fields = ("author", "body")
    list_filter = ("created_at", "updated_at")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("author", "body")}),
        (
            "Временные метки",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )


@admin.register(FounderSection)
class FounderSectionAdmin(admin.ModelAdmin):
    list_display = ("id", "image", "description", "created_at", "updated_at")
    search_fields = ("description",)
    list_filter = ("created_at", "updated_at")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("image", "description", "paragraphs")}),
        (
            "Временные метки",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )
