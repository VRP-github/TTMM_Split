from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

class ttmmUser(AbstractUser):
    # add aditional fields here.
    CUSTOMER_ID = models.IntegerField(primary_key=True, db_column='CUSTOMER_ID')
    EMAIL = models.EmailField(max_length=100, unique=True, db_column='USER_EMAIL')
    USERNAME = models.CharField(max_length = 50, unique=True, db_column='USERNAME')
    First_Name = models.CharField(max_length=50, db_column='FIRST_NAME')
    Last_Name = models.CharField(max_length=50, db_column='LAST_NAME')
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_verified = models.CharField(max_length=1, default='N')
    is_active = models.BooleanField(default=True)
    CREATE_DATE = models.DateTimeField(auto_now_add=True, db_column='CREATE_DATE')
    CREATED_BY = models.CharField(max_length=100, db_column='CREATED_BY')
    last_login = models.DateTimeField(auto_now=True, db_column='LAST_LOGIN')
    Last_Updated_Date = models.DateTimeField(auto_now=True, db_column='LAST_UPDATED_DATE')
    Last_Updated_By = models.CharField(max_length=100, db_column='LAST_UPDATED_BY')
    auth_provider = models.CharField(max_length=100, default="Using Email", db_column="AUTH_PROVIDER")
    agreed_to_terms = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name=_('groups'),
        blank=True,
        related_name='customer_set',
        related_query_name='customer',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name=_('user permissions'),
        blank=True,
        related_name='customer_set',
        related_query_name='customer',
    )

    def save(self, *args, **kwargs):
        if not self.CUSTOMER_ID:
            last_customer = ttmmUser.objects.order_by('-CUSTOMER_ID').first()
            if not last_customer:
                self.CUSTOMER_ID = 100
            else:
                self.CUSTOMER_ID = last_customer.CUSTOMER_ID + 1
        super().save(*args, **kwargs)

    def __str__(self):
        return self.EMAIL
    class Meta:
        db_table = 'ttmm_user'

