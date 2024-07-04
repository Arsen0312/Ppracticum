from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _
from django.db import models

from phonenumber_field.modelfields import PhoneNumberField

from apps.academy.models import Course


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


class Contact(Base):
    facebook = models.URLField(blank=True, null=True, verbose_name=_("Facebook"))
    instagram = models.URLField(blank=True, null=True, verbose_name=_("Instagram"))
    whatsapp = models.URLField(blank=True, null=True, verbose_name=_("WhatsApp"))
    telegram = models.URLField(blank=True, null=True, verbose_name=_("Telegram"))

    phone = PhoneNumberField(
        help_text=_("Введите номер телефона сотрудника"),
        verbose_name=_("Телефон"),
    )
    email = models.EmailField(
        verbose_name=_("Электронная почта"),
        help_text=_("Введите электронную почту сотрудника"),
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = _("Контакт")
        verbose_name_plural = _("Контакты")

    def __str__(self):
        return f"{self.phone}"


class Teacher(Base):
    first_name = models.CharField(max_length=255, verbose_name=_("Имя"))
    last_name = models.CharField(max_length=255, verbose_name=_("Фамилия"))
    patronymic = models.CharField(
        max_length=255, blank=True, null=True, verbose_name=_("Отчество")
    )

    rating = models.PositiveSmallIntegerField(
        blank=True,
        null=True,
        default=1,
        verbose_name=_("Рейтинг сотрудника"),
        help_text=_("Укажите рейтинг сотрудника (от 0 до 10)"),
        validators=[MinValueValidator(0), MaxValueValidator(10)],
    )
    avatar = models.ImageField(
        upload_to="teacher_avatars/",
        verbose_name=_("Фотография сотрудника"),
        help_text=_("Загрузите изображение для аватара сотрудника"),
        blank=True,
        null=True,
        default="default_image.jpg",
    )
    role = models.CharField(
        max_length=255, blank=True, null=True, verbose_name=_("Роль")
    )

    courses = models.ManyToManyField(
        Course,
        related_name="teachers",
        blank=True,
        verbose_name=_("Курсы"),
        help_text=_("Выберите курсы, связанные с сотрудником"),
    )
    contacts = models.ForeignKey(
        Contact,
        on_delete=models.SET_NULL,
        related_name="teachers",
        help_text=_("Укажите контакты сотрудника"),
        verbose_name=_("Контакты"),
        blank=True,
        null=True,
    )

    description = models.TextField(
        blank=True,
        null=True,
        verbose_name=_("О сотруднике"),
        help_text=_("Введите информацию о сотруднике"),
    )
    experience = models.TextField(
        verbose_name=_("Опыт работы"),
        help_text=_("Используйте красную строку для разделения опыта (макс. 20)"),
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = _("Преподаватель")
        verbose_name_plural = _("Преподаватели")

    def __str__(self):
        return f"{self.last_name} {self.first_name}"
