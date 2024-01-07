from django.db import models


class User(models.Model):
    account = models.TextField()
    pwd = models.TextField()
    role = models.TextField(null=True, blank=True, default='user')

    class Meta:
        db_table = 'user'  # 显式指定表名为 "user"

    def __str__(self):
        return self.account


class Plant(models.Model):
    category = models.TextField(null=True, blank=True)
    family_serial_number = models.TextField(null=True, blank=True)
    chinese_family_name = models.TextField(null=True, blank=True)
    latin_family_name = models.TextField(null=True, blank=True)
    chinese_genus_name = models.TextField(null=True, blank=True)
    latin_genus_name = models.TextField(null=True, blank=True)
    chinese_species_name = models.TextField(null=True, blank=True)
    latin_species_name = models.TextField(null=True, blank=True)
    author_of_the_species = models.TextField(null=True, blank=True)
    rank_indicator = models.TextField(null=True, blank=True)
    status = models.TextField(null=True, blank=True)
    county_city_distribution = models.TextField(null=True, blank=True)
    remarks = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'plant'  # 显式指定表名为 "user"

    def __str__(self):
        return self.latin_species_name