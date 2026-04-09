from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Event


class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=False, help_text='Optional.')

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = ['name', 'date', 'time', 'description']
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date'}),
            'time': forms.TimeInput(attrs={'type': 'time'}),
            'description': forms.Textarea(attrs={'rows': 4}),
        }

    def __init__(self, *args, user=None, instance=None, **kwargs):
        super().__init__(*args, instance=instance, **kwargs)
        self.user = user

    def clean(self):
        cleaned_data = super().clean()
        date = cleaned_data.get('date')
        time = cleaned_data.get('time')

        if date and time and self.user:
            # Check for scheduling conflict (same user, same date and time)
            qs = Event.objects.filter(user=self.user, date=date, time=time)
            if self.instance and self.instance.pk:
                qs = qs.exclude(pk=self.instance.pk)
            if qs.exists():
                raise forms.ValidationError(
                    "You already have an event scheduled at this date and time."
                )
        return cleaned_data
