from django.db import models

# Create your models here.
class Categories(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.name

class Products(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    id_category = models.ForeignKey(to=Categories, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.name

class Client(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.name

class Factures(models.Model):
    id = models.AutoField(primary_key=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    id_client = models.ForeignKey(to=Client, on_delete=models.CASCADE, related_name='factures')

    def __str__(self):
        return self.name

class FacturesDetail(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    amount = models.IntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    id_facture = models.ForeignKey(to=Factures, on_delete=models.CASCADE, related_name='factures')
    id_product = models.ForeignKey(to=Products, on_delete=models.CASCADE, related_name='factures')

    def __str__(self):
        return self.name


    