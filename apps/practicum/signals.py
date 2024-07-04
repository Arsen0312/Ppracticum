from config.settings import RETAILCRM_URL, RETAILCRM_KEY
from django.db.models.signals import post_save
from django.dispatch import receiver

import retailcrm

from .models import Lead


@receiver(post_save, sender=Lead)
def create_crm_order(sender, instance, created, **kwargs):
    try:
        client = retailcrm.v3(RETAILCRM_URL, RETAILCRM_KEY)
        name_parts = instance.full_name.split()
        order = {
            "firstName": name_parts[0] if len(name_parts) > 0 else "",
            "lastName": name_parts[1] if len(name_parts) > 1 else "",
            "patronymic": name_parts[2] if len(name_parts) > 2 else "",
            "phone": str(instance.phone),
            "email": instance.email,
            "orderMethod": "call-request",
        }
        client.order_create(order)
    except Exception as e:
        print("Ошибка при отправке запроса к RetailCRM:", e)
