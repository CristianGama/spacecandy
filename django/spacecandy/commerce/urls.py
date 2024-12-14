from django.urls import path

from . import views

urlpatterns = [
    path("categories", views.CategoriesView.as_view(), name="categories"),
    path("products", views.ProductsView.as_view(), name="productss"),
    path("products/<int:id_category>", views.ProductsByCategoryView.as_view(), name="productsByCategory"),
]