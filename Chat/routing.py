from django.urls import path
from .consumers import *


websocket_urlpatterns = [
    path("ws/chat/<username>", ChatConsumer.as_asgi()),
]
