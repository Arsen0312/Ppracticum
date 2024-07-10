import random

from apps.academy.models import Course

from .models import Teacher, Contact


def create_contacts():
    contacts_data = [
        {
            "phone": "+996700123451",
            "email": "teacher1@example.com",
            "facebook": "https://facebook.com/teacher1",
            "instagram": "https://instagram.com/teacher1",
            "whatsapp": "https://wa.me/700123451",
            "telegram": "https://t.me/teacher1",
        },
        {
            "phone": "+996700123452",
            "email": "teacher2@example.com",
            "facebook": "https://facebook.com/teacher2",
            "instagram": "https://instagram.com/teacher2",
            "whatsapp": "https://wa.me/700123452",
            "telegram": "https://t.me/teacher2",
        },
        {
            "phone": "+996700123453",
            "email": "teacher3@example.com",
            "facebook": "https://facebook.com/teacher3",
            "instagram": "https://instagram.com/teacher3",
            "whatsapp": "https://wa.me/700123453",
            "telegram": "https://t.me/teacher3",
        },
    ]

    for contact_data in contacts_data:
        Contact.objects.get_or_create(**contact_data)


def create_teachers():
    teachers_data = [
        {
            "first_name": "Имя 1",
            "last_name": "Фамилия 1",
            "patronymic": "Отчество 1",
            "rating": random.randint(0, 10),
            "role": "Роль 1",
            "description": "Описание преподавателя 1",
            "experience": "Опыт работы преподавателя 1",
        },
        {
            "first_name": "Имя 2",
            "last_name": "Фамилия 2",
            "patronymic": "Отчество 2",
            "rating": random.randint(0, 10),
            "role": "Роль 2",
            "description": "Описание преподавателя 2",
            "experience": "Опыт работы преподавателя 2",
        },
        {
            "first_name": "Имя 3",
            "last_name": "Фамилия 3",
            "patronymic": "Отчество 3",
            "rating": random.randint(0, 10),
            "role": "Роль 3",
            "description": "Описание преподавателя 3",
            "experience": "Опыт работы преподавателя 3",
        },
    ]

    all_courses = list(Course.objects.all())
    all_contacts = list(Contact.objects.all())

    for i, teacher in enumerate(teachers_data):
        contact = all_contacts[i]
        teacher, created = Teacher.objects.get_or_create(**teacher, contacts=contact)

        if created:
            random_courses = random.sample(all_courses, 2)
            for course in random_courses:
                teacher.courses.add(course)


def fill_account():
    create_contacts()
    create_teachers()
