from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = ["id", "created_datetime", "author_ip"]
        
    def update(self, instance, validated_data):
        validated_data.pop("username", None)
        return super().update(instance, validated_data)