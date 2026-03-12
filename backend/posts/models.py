from django.db import models

class Post(models.Model):
    username = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    content = models.TextField()
    author_ip = models.GenericIPAddressField(null=True, blank=True)
    created_datetime = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_datetime"]

    def __str__(self):
        return f"{self.username} - {self.title}"
