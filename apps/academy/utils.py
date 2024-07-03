import random
from apps.academy.models import Course, Skill, Advantage


def create_skills():
    skills_data = [
        {"title": "Навык 1", "description": "Описание Навыка 1"},
        {"title": "Навык 2", "description": "Описание Навыка 2"},
        {"title": "Навык 3", "description": "Описание Навыка 3"},
        {"title": "Навык 4", "description": "Описание Навыка 4"},
        {"title": "Навык 5", "description": "Описание Навыка 5"},
        {"title": "Навык 6", "description": "Описание Навыка 6"},
    ]
    for skill in skills_data:
        Skill.objects.get_or_create(**skill)


def create_advantages():
    advantages_data = [
        {"title": "Преимущество 1", "description": "Описание Преимущества 1"},
        {"title": "Преимущество 2", "description": "Описание Преимущества 2"},
        {"title": "Преимущество 3", "description": "Описание Преимущества 3"},
        {"title": "Преимущество 4", "description": "Описание Преимущества 4"},
        {"title": "Преимущество 5", "description": "Описание Преимущества 5"},
        {"title": "Преимущество 6", "description": "Описание Преимущества 6"},
    ]
    for advantage in advantages_data:
        Advantage.objects.get_or_create(**advantage)


def create_courses():
    courses_data = [
        {
            "title": "Курс 1",
            "description": "Описание Курса 1",
            "purpose": "Цель Курса 1",
            "duration": "Продолжительность Курса 1",
        },
        {
            "title": "Курс 2",
            "description": "Описание Курса 2",
            "purpose": "Цель Курса 2",
            "duration": "Продолжительность Курса 2",
        },
        {
            "title": "Курс 3",
            "description": "Описание Курса 3",
            "purpose": "Цель Курса 3",
            "duration": "Продолжительность Курса 3",
        },
    ]

    all_skills = list(Skill.objects.all())
    all_advantages = list(Advantage.objects.all())

    for course in courses_data:
        new_course, created = Course.objects.get_or_create(**course)

        if created:
            random_skills = random.sample(all_skills, 2)
            random_advantages = random.sample(all_advantages, 2)

            for skill in random_skills:
                new_course.skills.add(skill)

            for advantage in random_advantages:
                new_course.advantages.add(advantage)


def fill_academy():
    create_skills()
    create_advantages()
    create_courses()
