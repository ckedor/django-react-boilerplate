from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)), 
    path('admin/', admin.site.urls),
]
