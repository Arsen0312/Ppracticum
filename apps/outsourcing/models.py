from django.utils.translation import gettext_lazy as _
from django.db import models


class Base(models.Model):
    """
    Базовый абстрактный класс, содержащий общие поля и настройки для всех моделей.
    Поля включают время создания и обновления записей.

    Attributes:
        created_at (DateTimeField): Дата и время создания записи.
        updated_at (DateTimeField): Дата и время последнего обновления записи.
    """

    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text=_("Дата и время создания записи"),
        verbose_name=_("Дата создания"),
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        help_text=_("Дата и время последнего обновления записи"),
        verbose_name=_("Дата последнего обновления"),
    )

    class Meta:
        abstract = True
        verbose_name = _("Базовая модель")
        verbose_name_plural = _("Базовые модели")


class OutsourcingService(Base):
    """
    Модель для хранения информации об услугах аутсорсинга.
    """

    title = models.CharField(
        max_length=255,
        unique=True,
        verbose_name=_("Название услуги"),
        help_text=_("Введите название услуги"),
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name=_("Описание услуги"),
        help_text=_("Введите описание услуги"),
    )
    icon = models.ImageField(
        upload_to="outsourcing_service_icons/",
        verbose_name=_("Иконка услуги"),
        help_text=_("Загрузите иконку услуги"),
        blank=True,
        null=True,
        default="default_image.jpg",
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Услуга")
        verbose_name_plural = _("Услуги")


class OutsourcingBenefit(Base):
    """
    Модель для хранения информации о преимуществах аутсорсинга.
    """

    title = models.CharField(
        max_length=255,
        unique=True,
        verbose_name=_("Название преимущества"),
        help_text=_("Введите название преимущества"),
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name=_("Описание преимущества"),
        help_text=_("Введите описание преимущества"),
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Преимущество")
        verbose_name_plural = _("Преимущества")


class OutsourcingSkill(Base):
    """
    Модель для хранения информации об умениях аутсорсинга.
    """

    title = models.CharField(
        max_length=255,
        unique=True,
        verbose_name=_("Название умения"),
        help_text=_("Введите название умения"),
    )
    icon = models.ImageField(
        upload_to="outsourcing_skill_icons/",
        verbose_name=_("Иконка умения"),
        help_text=_("Загрузите иконку умения"),
        blank=True,
        null=True,
        default="default_image.jpg",
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Умение")
        verbose_name_plural = _("Умения")
