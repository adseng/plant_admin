from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from my_app.models import User, Plant
from my_app.serializers import UserSerializer, PlantSerializer
from rest_framework.decorators import api_view


@api_view(['GET'])
def get_user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def search_users(request):
    conditions = {}
    for key, value in request.data.items():
        if value is not None and key != 'id':
            conditions[f"{key}__icontains"] = value

    Users = User.objects.filter(**conditions)
    serializer = UserSerializer(Users, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['POST'])
def add_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({"message": "User added successfully."})
    return JsonResponse(serializer.errors, status=400)


@api_view(['PUT'])
def update_user_by_id(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return JsonResponse({"message": "User not found."}, status=404)

    serializer = UserSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({"message": "User updated successfully."})
    return JsonResponse(serializer.errors, status=400)


@api_view(['DELETE'])
def delete_user_by_id(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return JsonResponse({"message": "User not found."}, status=404)

    user.delete()
    return JsonResponse({"message": "User deleted successfully."})


@api_view(['GET'])
def select_user_by_account(request, account):
    try:
        user = User.objects.get(account=account)
    except User.DoesNotExist:
        return JsonResponse({"message": "User not found."}, status=404)

    serializer = UserSerializer(user)
    return JsonResponse(serializer.data)


@api_view(['GET'])
def select_all(request):
    plants = Plant.objects.all()
    serializer = PlantSerializer(plants, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def select_plants_by_id(request, plant_id):
    try:
        plant = Plant.objects.get(id=plant_id)
    except Plant.DoesNotExist:
        return JsonResponse({"message": "Plant not found."}, status=404)

    serializer = PlantSerializer(plant)
    return JsonResponse(serializer.data)


@api_view(['POST'])
def add_plant(request):
    serializer = PlantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({"message": "Plant added successfully."})
    return JsonResponse(serializer.errors, status=400)


@api_view(['PUT'])
def update_plant(request, plant_id):
    try:
        plant = Plant.objects.get(id=plant_id)
    except Plant.DoesNotExist:
        return JsonResponse({"message": "Plant not found."}, status=404)

    serializer = PlantSerializer(plant, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({"message": "Plant updated successfully."})
    return JsonResponse(serializer.errors, status=400)


@api_view(['DELETE'])
def delete_plant(request, plant_id):
    try:
        plant = Plant.objects.get(id=plant_id)
    except Plant.DoesNotExist:
        return JsonResponse({"message": "Plant not found."}, status=404)

    plant.delete()
    return JsonResponse({"message": "Plant deleted successfully."})


@api_view(['POST'])
def search_plants(request):
    conditions = {}
    for key, value in request.data.items():
        if value is not None and key != 'id':
            conditions[f"{key}__icontains"] = value

    plants = Plant.objects.filter(**conditions)
    serializer = PlantSerializer(plants, many=True)
    return JsonResponse(serializer.data, safe=False)