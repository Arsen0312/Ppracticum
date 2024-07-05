from django.core.management.base import BaseCommand
from apps.academy.utils import fill_academy


class Command(BaseCommand):
    help = 'Создает стандартные данные для приложения "Академия"'

    def handle(self, *args, **kwargs):
        fill_academy()
        self.stdout.write(
            self.style.SUCCESS('Стандартные данные успешно созданы ("Академия")')
        )
