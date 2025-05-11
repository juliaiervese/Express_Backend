#curl --request GET \
 # --url 'http://localhost:3000/securedExampleRoute' \
  #--header "Authorization: Bearer $TOKEN" \
  
#   tentativa de acesso a /protected sem token {"message":"Token não fornecido"}
 #curl --request GET \
  # --url 'http://localhost:3000/securedExampleRoute'

# tentativa de acesso a /protected com token inválido {"message":"Token inválido"}
 #curl --request GET \
  # --url 'http://localhost:3000/securedExampleRoute' \
   #--header 'Authorization: Bearer <token_inválido>'
