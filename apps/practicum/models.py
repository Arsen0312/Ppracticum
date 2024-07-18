from django.db import models
from django.utils.translation import gettext_lazy as _

from phonenumber_field.modelfields import PhoneNumberField


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


class Lead(Base):
    """
    Модель потенциального клиента.

    Attributes:
        full_name (CharField): Полное имя потенциального клиента.
        phone (PhoneNumberField): Номер телефона потенциального клиента.
        email (EmailField): Электронная почта потенциального клиента.
    """

    full_name = models.CharField(
        max_length=255,
        verbose_name=_("Полное имя"),
        help_text=_("Введите полное имя потенциального клиента"),
    )
    phone = PhoneNumberField(
        help_text=_("Введите номер телефона клиента"),
        verbose_name=_("Телефон"),
    )
    email = models.EmailField(
        verbose_name=_("Электронная почта"),
        help_text=_("Введите электронную почту клиента"),
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = _("Заявка")
        verbose_name_plural = _("Заявки")


class Benefit(Base):
    """
    Модель преимущества Практикума.

    Attributes:
        icon (ImageField): Иконка преимущества.
        title (CharField): Название преимущества.
        description (TextField): Описание преимущества.
    """

    icon = models.ImageField(
        upload_to="benefit_icons/",
        blank=True,
        null=True,
        verbose_name=_("Иконка преимущества"),
        help_text=_("Загрузите изображение для иконки преимущества"),
        default="default_image.jpg",
    )
    title = models.CharField(
        max_length=255,
        verbose_name=_("Название преимущества"),
        help_text=_("Введите название преимущества"),
    )
    description = models.TextField(
        verbose_name=_("Описание преимущества"),
        blank=True,
        null=True,
        help_text=_("Введите описание преимущества (необязательно)"),
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Преимущество")
        verbose_name_plural = _("Преимущества")


class Review(Base):
    """
    Модель отзыва.

    Attributes:
        author (CharField): Автор отзыва.
        body (TextField): Текст отзыва.
    """

    author = models.CharField(
        max_length=255,
        verbose_name=_("Автор отзыва"),
        help_text=_("Введите имя автора отзыва"),
    )
    body = models.TextField(
        verbose_name=_("Текст отзыва"),
        blank=True,
        null=True,
        help_text=_("Введите текст отзыва (необязательно)"),
    )

    def __str__(self):
        return f"Отзыв от {self.author}"

    class Meta:
        verbose_name = _("Отзыв")
        verbose_name_plural = _("Отзывы")


class FounderSection(Base):
    """
    Модель раздела с информацией о основателях Практикума.

    Attributes:
        full_name (CharField): Имя руководителя.
        image (ImageField): Изображение основателя.
        description (TextField): Описание раздела.
        paragraphs (TextField): Параграфы раздела.
    """

    full_name = models.CharField(
        max_length=255,
        unique=True,
        verbose_name=_("ФИО руководителя"),
        help_text=_("Укажите ФИО руководителя"),
    )
    image = models.ImageField(
        upload_to="founder_images/",
        verbose_name=_("Изображение основателя"),
        default="default_image.jpg",
        blank=True,
        null=True,
        help_text=_("Загрузите изображение основателя (необязательно)"),
    )
    description = models.TextField(
        verbose_name=_("Описание раздела"),
        blank=True,
        null=True,
        help_text=_("Введите описание раздела (необязательно)"),
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = _("Руководитель")
        verbose_name_plural = _("Руководители")


class Paragraphs(Base):
    paragraphs = models.TextField(
        verbose_name=_("Параграфы раздела"),
        help_text=_("Используйте красную строку для разделения параграфов (макс. 6)"),
        blank=True,
        null=True,
    )
    founder = models.ForeignKey(
        FounderSection,
        verbose_name=_('Владелец'),
        on_delete=models.CASCADE,
        related_name='paragraphs',
    )

    def __str__(self):
        return self.paragraphs

    class Meta:
        verbose_name = _('Параграф')
        verbose_name_plural = _('Параграфы')