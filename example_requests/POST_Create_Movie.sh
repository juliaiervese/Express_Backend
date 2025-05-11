
TOKEN=$(curl -s --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "batista123",
    "password": "Senha@123"
}' | jq -r .token)

echo "JWT obtido: $TOKEN"


curl --request POST \
  --url 'http://localhost:3000/movies' \
  --header "Authorization: Bearer $TOKEN" \
  --header 'Content-Type: application/json' \
  --data '{
    "title": "Matrix",
    "genre": "Sci-Fi",
    "watchedAt": "11-05-2025",
    "rating": 5
  }'
