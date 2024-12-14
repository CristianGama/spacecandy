from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from commerce.models import Categories, Products
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')
class CategoriesView(View):
    def get(self, request):
        return JsonResponse(data=list(Categories.objects.all().values()), safe=False)

@method_decorator(csrf_exempt, name='dispatch')
class ProductsView(View):
    def get(self, request):
        return JsonResponse(data=list(Products.objects.all().values()), safe=False)
    
@method_decorator(csrf_exempt, name='dispatch')
class ProductsByCategoryView(View):
    def get(self, request, id_category):
        return JsonResponse(data=list(Products.objects.filter(id_category=id_category).values()), safe=False)
    
    
