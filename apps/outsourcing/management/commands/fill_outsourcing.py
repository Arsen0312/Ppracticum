from django.core.management.base import BaseCommand
from apps.outsourcing.utils import fill_outsourcing


class Command(BaseCommand):
    help = 'Создает стандартные данные для приложения "Аутсорсинг"'

    def handle(self, *args, **kwargs):
        fill_outsourcing()
        self.stdout.write(
            self.style.SUCCESS('Стандартные данные успешно созданы ("Аутсорсинг")')
        )
