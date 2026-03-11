import json
from django.http import JsonResponse
import logging

logger = logging.getLogger('authentication') 

def hello_test(request):
    logger.debug('DEBUG message')     
    logger.info('INFO message')       
    logger.warning('WARNING message') 
    logger.error('ERROR message')     
    return JsonResponse({"message": "hello world!"})