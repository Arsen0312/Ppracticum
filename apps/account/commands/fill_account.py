from django.core.management.base import BaseCommand
from apps.account.utils import fill_account


class Command(BaseCommand):
    help = 'Создает стандартные данные для приложения "Сотрудники"'

    def handle(self, *args, **kwargs):
        fill_account()
        self.stdout.write(
            self.style.SUCCESS('Стандартные данные успешно созданы ("Сотрудники")')
        )
