from django.core.validators import MinValueValidator, MaxValueValidator
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


class Course(Base):
    """
    Модель курса.

    Attributes:
        title (CharField): Название курса.
        description (TextField): Описание курса.
        purpose (TextField): Цель курса.
        duration (CharField): Продолжительность курса.
        tag (CharField): Метка курса.
        trial_lesson (URLField): Ссылка на пробное занятие.
        background_person (ImageField): Изображение для фона.
        skills (ManyToManyField): Связь с навыками, развиваемыми на курсе.
        advantages (ManyToManyField): Связь с преимуществами курса.
    """

    title = models.CharField(
        max_length=255,
        unique=True,
        verbose_name=_("Название курса"),
        help_text=_("Введите название курса"),
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name=_("Описание курса"),
        help_text=_("Введите описание курса"),
    )
    purpose = models.TextField(
        blank=True,
        null=True,
        verbose_name=_("Цель курса"),
        help_text=_("Введите цель курса"),
    )
    duration = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name=_("Продолжительность курса"),
        help_text=_("Введите продолжительность курса"),
    )

    tag = models.CharField(
        max_length=16,
        blank=True,
        null=True,
        verbose_name=_("Метка курса"),
        help_text=_("Введите метку курса"),
    )
    icon = models.ImageField(
        upload_to="course_icons/",
        verbose_name=_("Иконка курса"),
        help_text=_("Загрузите изображение для иконки курса"),
        blank=True,
        null=True,
        default="default_image.jpg",
    )
    rating = models.PositiveSmallIntegerField(
        blank=True,
        null=True,
        default=1,
        verbose_name=_("Рейтинг курса"),
        help_text=_("Укажите рейтинг курса (от 0 до 10)"),
        validators=[MinValueValidator(0), MaxValueValidator(10)],
    )

    trial_lesson = models.URLField(
        blank=True,
        null=True,
        verbose_name=_("Ссылка на пробное занятие"),
        help_text=_("Введите ссылку на пробное занятие"),
    )
    background_person = models.ImageField(
        upload_to="course_backgrounds/",
        verbose_name=_("Изображение для фона"),
        help_text=_("Загрузите изображение для фона курса"),
        blank=True,
        null=True,
        default="default_image.jpg",
    )

    skills = models.ManyToManyField(
        "Skill",
        related_name="courses",
        blank=True,
        verbose_name=_("Навыки курса"),
        help_text=_("Выберите навыки, развиваемые на курсе"),
    )
    advantages = models.ManyToManyField(
        "Advantage",
        related_name="courses",
        blank=True,
        verbose_name=_("Преимущества курса"),
        help_text=_("Выберите преимущества курса"),
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Курс")
        verbose_name_plural = _("Курсы")


class Skill(Base):
    """
    Модель навыка.

    Attributes:
        title (CharField): Название навыка.
        description (TextField): Описание навыка.
    """

    title = models.CharField(
        max_length=255,
        unique=True,
        verbose_name=_("Название навыка"),
        help_text=_("Введите название навыка"),
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name=_("Описание навыка"),
        help_text=_("Введите описание навыка"),
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Навык")
        verbose_name_plural = _("Навыки")


class Advantage(Base):
    """
    Модель преимущества курса.

    Attributes:
        icon (ImageField): Иконка преимущества.
        title (CharField): Название преимущества.
        description (TextField): Описание преимущества.
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
    icon = models.ImageField(
        upload_to="advantage_icons/",
        verbose_name=_("Иконка преимущества"),
        help_text=_("Загрузите иконку преимущества"),
        blank=True,
        null=True,
        default="default_image.jpg",
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Преимущество (Курса)")
        verbose_name_plural = _("Преимущества")
