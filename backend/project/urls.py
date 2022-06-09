from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from rest_framework.authtoken import views

from project.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)), 
    path('auth/', views.obtain_auth_token, name='auth'),
    path('admin/', admin.site.urls),
]
