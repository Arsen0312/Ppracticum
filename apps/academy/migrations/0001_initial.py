# Generated by Django 5.0.6 on 2024-07-04 12:28

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Advantage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Дата и время создания записи",
                        verbose_name="Дата создания",
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True,
                        help_text="Дата и время последнего обновления записи",
                        verbose_name="Дата последнего обновления",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        help_text="Введите название преимущества",
                        max_length=255,
                        unique=True,
                        verbose_name="Название преимущества",
                    ),
                ),
                (
                    "description",
                    models.TextField(
                        blank=True,
                        help_text="Введите описание преимущества",
                        null=True,
                        verbose_name="Описание преимущества",
                    ),
                ),
                (
                    "icon",
                    models.ImageField(
                        blank=True,
                        default="default_image.jpg",
                        help_text="Загрузите иконку преимущества",
                        null=True,
                        upload_to="advantage_icons/",
                        verbose_name="Иконка преимущества",
                    ),
                ),
            ],
            options={
                "verbose_name": "Преимущество (Курса)",
                "verbose_name_plural": "Преимущества",
            },
        ),
        migrations.CreateModel(
            name="Skill",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Дата и время создания записи",
                        verbose_name="Дата создания",
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True,
                        help_text="Дата и время последнего обновления записи",
                        verbose_name="Дата последнего обновления",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        help_text="Введите название навыка",
                        max_length=255,
                        unique=True,
                        verbose_name="Название навыка",
                    ),
                ),
                (
                    "description",
                    models.TextField(
                        blank=True,
                        help_text="Введите описание навыка",
                        null=True,
                        verbose_name="Описание навыка",
                    ),
                ),
            ],
            options={
                "verbose_name": "Навык",
                "verbose_name_plural": "Навыки",
            },
        ),
        migrations.CreateModel(
            name="Course",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Дата и время создания записи",
                        verbose_name="Дата создания",
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True,
                        help_text="Дата и время последнего обновления записи",
                        verbose_name="Дата последнего обновления",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        help_text="Введите название курса",
                        max_length=255,
                        unique=True,
                        verbose_name="Название курса",
                    ),
                ),
                (
                    "description",
                    models.TextField(
                        blank=True,
                        help_text="Введите описание курса",
                        null=True,
                        verbose_name="Описание курса",
                    ),
                ),
                (
                    "purpose",
                    models.TextField(
                        blank=True,
                        help_text="Введите цель курса",
                        null=True,
                        verbose_name="Цель курса",
                    ),
                ),
                (
                    "duration",
                    models.CharField(
                        blank=True,
                        help_text="Введите продолжительность курса",
                        max_length=255,
                        null=True,
                        verbose_name="Продолжительность курса",
                    ),
                ),
                (
                    "tag",
                    models.CharField(
                        blank=True,
                        help_text="Введите метку курса",
                        max_length=16,
                        null=True,
                        verbose_name="Метка курса",
                    ),
                ),
                (
                    "icon",
                    models.ImageField(
                        blank=True,
                        default="default_image.jpg",
                        help_text="Загрузите изображение для иконки курса",
                        null=True,
                        upload_to="course_icons/",
                        verbose_name="Иконка курса",
                    ),
                ),
                (
                    "rating",
                    models.PositiveSmallIntegerField(
                        blank=True,
                        default=1,
                        help_text="Укажите рейтинг курса (от 0 до 10)",
                        null=True,
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(10),
                        ],
                        verbose_name="Рейтинг курса",
                    ),
                ),
                (
                    "trial_lesson",
                    models.URLField(
                        blank=True,
                        help_text="Введите ссылку на пробное занятие",
                        null=True,
                        verbose_name="Ссылка на пробное занятие",
                    ),
                ),
                (
                    "background_person",
                    models.ImageField(
                        blank=True,
                        default="default_image.jpg",
                        help_text="Загрузите изображение для фона курса",
                        null=True,
                        upload_to="course_backgrounds/",
                        verbose_name="Изображение для фона",
                    ),
                ),
                (
                    "advantages",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Выберите преимущества курса",
                        related_name="courses",
                        to="academy.advantage",
                        verbose_name="Преимущества курса",
                    ),
                ),
                (
                    "skills",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Выберите навыки, развиваемые на курсе",
                        related_name="courses",
                        to="academy.skill",
                        verbose_name="Навыки курса",
                    ),
                ),
            ],
            options={
                "verbose_name": "Курс",
                "verbose_name_plural": "Курсы",
            },
        ),
    ]
