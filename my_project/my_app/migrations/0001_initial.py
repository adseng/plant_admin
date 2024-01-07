# Generated by Django 4.2.9 on 2024-01-04 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.TextField()),
                ('family_serial_number', models.TextField()),
                ('chinese_family_name', models.TextField()),
                ('latin_family_name', models.TextField()),
                ('chinese_genus_name', models.TextField()),
                ('latin_genus_name', models.TextField()),
                ('chinese_species_name', models.TextField()),
                ('latin_species_name', models.TextField()),
                ('author_of_the_species', models.TextField()),
                ('rank_indicator', models.TextField()),
                ('status', models.TextField()),
                ('county_city_distribution', models.TextField()),
                ('remarks', models.TextField()),
            ],
            options={
                'db_table': 'plant',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account', models.TextField()),
                ('pwd', models.TextField()),
                ('role', models.TextField()),
            ],
            options={
                'db_table': 'user',
            },
        ),
    ]
