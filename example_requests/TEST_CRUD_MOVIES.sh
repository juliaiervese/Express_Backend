# CADASTRAR USUÁRIO
# curl --request POST \
  # --url http://localhost:3000/users/register \
  # --header 'Content-Type: application/json' \
  # --data '{
   #  "name": "batista",
   #  "username": "batista123",
   #  "password": "Senha@123"
   #}'

# 1) LOGIN e captura do JWT
TOKEN=$(curl -s --request POST \
 --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "batista123",
    "password": "Senha@123"
  }' | jq -r .token)

# 2) CRIAR FILME usando o JWT obtido
#curl --request POST \
#  --url http://localhost:3000/movies \
#  --header "Authorization: Bearer $TOKEN" \
# --header 'Content-Type: application/json' \
#  --data '{
#    "title": "Matrix",
#    "genre": "Sci-Fi",
#    "watchedAt": "2025-05-11T00:00:00.000Z",
#    "rating": 5
#  }'

# LISTAR TODOS OS FILMES
 #curl --request GET \
  # --url http://localhost:3000/movies \
   #--header "Authorization: Bearer $TOKEN"

 #BUSCAR FILME POR ID (substituir <ID> pelo ID retornado)
# curl --request GET \
#   --url http://localhost:3000/movies/68212ee3145afab41e952f6a \
#   --header "Authorization: Bearer $TOKEN"

# ATUALIZAR TODOS OS CAMPOS (PUT)
 #curl --request PUT \
  # --url http://localhost:3000/movies/6821323d145afab41e952f84 \
  # --header "Authorization: Bearer $TOKEN" \
  # --header 'Content-Type: application/json' \
  # --data '{
  #   "title": "Matrix Reloaded",
  #   "genre": "Action",
  #   "watchedAt": "2025-06-01T00:00:00.000Z",
  #   "rating": 4
  # }'

# ATUALIZAÇÃO PARCIAL (PATCH)
 #curl --request PATCH \
  # --url http://localhost:3000/movies/6821323d145afab41e952f84 \
  # --header "Authorization: Bearer $TOKEN" \
  # --header 'Content-Type: application/json' \
  # --data '{
  #   "rating": 5
  # }'

# EXCLUIR FILME
# curl --request DELETE \
#   --url http://localhost:3000/movies/6821323d145afab41e952f84 \
#   --header "Authorization: Bearer $TOKEN"

# VERIFICAR EXCLUSÃO (deve retornar 404)
 curl --request GET \
   --url http://localhost:3000/movies/6821323d145afab41e952f84 \
   --header "Authorization: Bearer $TOKEN" \
   -w "\nstatus: %{http_code}\n"

