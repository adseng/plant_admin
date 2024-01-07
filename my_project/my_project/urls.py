from django.urls import path, re_path
from django.views.generic import TemplateView

from my_app import views

urlpatterns = [

    path('users', views.get_user_list),
    path('users/search', views.search_users),
    path('adduser', views.add_user),
    path('updateuserbyid/<int:user_id>', views.update_user_by_id),
    path('deleteuserbyid/<int:user_id>', views.delete_user_by_id),
    path('selectuserbyaccount/<str:account>', views.select_user_by_account),
    path('plants', views.select_all),
    path('plants/<int:plant_id>', views.select_plants_by_id),
    path('plants/add', views.add_plant),
    path('plants/update/<int:plant_id>', views.update_plant),
    path('plants/delete/<int:plant_id>', views.delete_plant),
    path('plants/search', views.search_plants),
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
]

# 兜底路径配置
urlpatterns += [re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))]