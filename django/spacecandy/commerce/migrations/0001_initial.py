# Generated by Django 5.1.3 on 2024-11-30 20:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Factures',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('id_client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='factures', to='commerce.client')),
            ],
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('id_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='commerce.categories')),
            ],
        ),
        migrations.CreateModel(
            name='FacturesDetail',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('amount', models.IntegerField()),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('id_facture', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='factures', to='commerce.factures')),
                ('id_product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='factures', to='commerce.products')),
            ],
        ),
    ]
