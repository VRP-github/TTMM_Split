from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import ttmmUserRegisterForm
from .models import ttmmUser
# Register your models here.

class ttmmUserAdmin(UserAdmin):
    add_form = ttmmUserRegisterForm
    model = ttmmUser
    list_display = [
        "EMAIL",
        "USERNAME",
        "is_staff",
        "is_active"
    ]
admin.site.register(ttmmUser, ttmmUserAdmin)