from .models import Benefit, Review, FounderSection


def create_benefits():
    benefits_data = [
        {"title": "Выгода 1", "description": "Описание для Выгоды 1"},
        {"title": "Выгода 2", "description": "Описание для Выгоды 2"},
        {"title": "Выгода 3", "description": "Описание для Выгоды 3"},
        {"title": "Выгода 4", "description": "Описание для Выгоды 4"},
    ]
    for benefit in benefits_data:
        Benefit.objects.get_or_create(**benefit)


def create_reviews():
    reviews_data = [
        {"author": "Автор 1", "body": "Текст отзыва 1"},
        {"author": "Автор 2", "body": "Текст отзыва 2"},
        {"author": "Автор 3", "body": "Текст отзыва 3"},
        {"author": "Автор 4", "body": "Текст отзыва 4"},
    ]
    for review in reviews_data:
        Review.objects.get_or_create(**review)


def create_founder():
    founder_data = {
        "full_name": "Алекс Джонсон",
        "description": "Соучредитель и CEO компании Practicum.",
        "paragraphs": "Ведет компанию с инновациями и видением.",
    }
    FounderSection.objects.get_or_create(**founder_data)


def fill_practicum():
    create_benefits()
    create_reviews()
    create_founder()
