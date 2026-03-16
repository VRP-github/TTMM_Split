import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import ttmmUserRegisterForm

logger = logging.getLogger('authentication') 

@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({"Error": "Invalid JSON format."}, status=400)
        form_data = {
            "USERNAME": data.get("username"),
            "EMAIL": data.get("email"),
            "First_Name": data.get("first_name"),
            "Last_Name": data.get("last_name"),
            "password1": data.get("password1"),
            "password2": data.get("password2"),
            "agreed_to_terms": data.get("agreed_to_terms")
        }

        form = ttmmUserRegisterForm(form_data)
        
        if form.is_valid():     
            form.save()           
            logger.info('User Registered Successfully')
            return JsonResponse({"Success": "User Registered!"})
        else:
            return JsonResponse({"Error": form.errors}, status=400)
            
    return JsonResponse({"Error": "POST request required"}, status=405)