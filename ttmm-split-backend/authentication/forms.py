from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import ttmmUser


class ttmmUserRegisterForm(UserCreationForm):
    USERNAME = forms.CharField(max_length=50)
    EMAIL = forms.EmailField(max_length=100)
    First_Name = forms.CharField(max_length=50)
    Last_Name = forms.CharField(max_length=50)
    agreed_to_terms = forms.BooleanField(required=True)

    class Meta:
        model = ttmmUser
        fields = ["USERNAME", "EMAIL", "First_Name", "Last_Name", "password1", "password2", "agreed_to_terms"]

    def clean_EMAIL(self):
        email = self.cleaned_data["EMAIL"]
        if ttmmUser.objects.filter(EMAIL=email).exists():
            raise forms.ValidationError("Email already exists.")
        return email

    def save(self, commit=True):
        user = super().save(commit=False)

        # Keep your custom columns
        user.USERNAME = self.cleaned_data["USERNAME"]
        user.EMAIL = self.cleaned_data["EMAIL"]
        user.First_Name = self.cleaned_data["First_Name"]
        user.Last_Name = self.cleaned_data["Last_Name"]
        user.agreed_to_terms = self.cleaned_data["agreed_to_terms"]

        # Keep AbstractUser default fields in sync (important for auth/admin)
        user.username = self.cleaned_data["USERNAME"]
        user.email = self.cleaned_data["EMAIL"]
        user.first_name = self.cleaned_data["First_Name"]
        user.last_name = self.cleaned_data["Last_Name"]

        # Required audit fields in your model
        user.CREATED_BY = self.cleaned_data["USERNAME"]
        user.Last_Updated_By = self.cleaned_data["USERNAME"]

        if commit:
            user.save()
        return user
    
class ttmmUserRegisterChangeForm(UserChangeForm):
    USERNAME = forms.CharField(max_length=50)
    EMAIL = forms.EmailField(max_length=100)
    First_Name = forms.CharField(max_length=50)
    Last_Name = forms.CharField(max_length=50)

    class Meta:
        model = ttmmUser
        fields = ["USERNAME", "EMAIL", "First_Name", "Last_Name", "agreed_to_terms"]

    def clean_EMAIL(self):
        email = self.cleaned_data["EMAIL"]
        if ttmmUser.objects.filter(EMAIL=email).exclude(pk=self.instance.pk).exists():
            raise forms.ValidationError("Email already exists.")
        return email

    def save(self, commit=True):
        user = super().save(commit=False)

        # Keep your custom columns
        user.USERNAME = self.cleaned_data["USERNAME"]
        user.EMAIL = self.cleaned_data["EMAIL"]
        user.First_Name = self.cleaned_data["First_Name"]
        user.Last_Name = self.cleaned_data["Last_Name"]

        # Keep AbstractUser default fields in sync (important for auth/admin)
        user.username = self.cleaned_data["USERNAME"]
        user.email = self.cleaned_data["EMAIL"]
        user.first_name = self.cleaned_data["First_Name"]
        user.last_name = self.cleaned_data["Last_Name"]

        # Required audit fields in your model
        user.CREATED_BY = self.cleaned_data["USERNAME"]
        user.Last_Updated_By = self.cleaned_data["USERNAME"]

        if commit:
            user.save()
        return user