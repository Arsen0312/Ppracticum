from .models import OutsourcingService, OutsourcingBenefit, OutsourcingSkill


def create_outsourcing_services():
    services_data = [
        {"title": "Услуга 1", "description": "Описание Услуги 1"},
        {"title": "Услуга 2", "description": "Описание Услуги 2"},
        {"title": "Услуга 3", "description": "Описание Услуги 3"},
        {"title": "Услуга 4", "description": "Описание Услуги 4"},
    ]
    for service in services_data:
        OutsourcingService.objects.get_or_create(**service)


def create_outsourcing_benefits():
    benefits_data = [
        {"title": "Преимущество 1", "description": "Описание Преимущества 1"},
        {"title": "Преимущество 2", "description": "Описание Преимущества 2"},
        {"title": "Преимущество 3", "description": "Описание Преимущества 3"},
        {"title": "Преимущество 4", "description": "Описание Преимущества 4"},
        {"title": "Преимущество 5", "description": "Описание Преимущества 5"},
        {"title": "Преимущество 6", "description": "Описание Преимущества 6"},
    ]
    for benefit in benefits_data:
        OutsourcingBenefit.objects.get_or_create(**benefit)


def create_outsourcing_skills():
    skills_data = [
        {"title": "Умение 1"},
        {"title": "Умение 2"},
        {"title": "Умение 3"},
        {"title": "Умение 4"},
        {"title": "Умение 5"},
        {"title": "Умение 6"},
    ]
    for skill in skills_data:
        OutsourcingSkill.objects.get_or_create(**skill)


def fill_outsourcing():
    create_outsourcing_skills()
    create_outsourcing_services()
    create_outsourcing_benefits()
