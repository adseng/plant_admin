from rest_framework import serializers
from my_app.models import User, Plant


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'account', 'pwd', 'role']


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = ['id', 'category',
                  'family_serial_number',
                  'chinese_family_name',
                  'latin_family_name',
                  'chinese_genus_name',
                  'latin_genus_name',
                  'chinese_species_name',
                  'latin_species_name',
                  'author_of_the_species',
                  'rank_indicator',
                  'status',
                  'county_city_distribution',
                  'remarks']
