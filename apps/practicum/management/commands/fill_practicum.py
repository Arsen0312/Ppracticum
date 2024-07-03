from django.core.management.base import BaseCommand
from apps.practicum.utils import fill_practicum


class Command(BaseCommand):
    help = 'Создает стандартные данные для приложения "Практикум"'

    def handle(self, *args, **kwargs):
        fill_practicum()
        self.stdout.write(self.style.SUCCESS('Стандартные данные успешно созданы ("Практикум")'))
