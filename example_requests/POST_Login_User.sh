#source ./requests/POST_Login_User.sh

 #login bem-sucedido (com username)
 #curl --request POST \
   #--url 'http://localhost:3000/users/login' \
   #--header 'Content-Type: application/json' \
   #--data '{
    # "username": "batista123",
    # "password": "Senha@123"
   # }'


# senha invalida {"message":"Senha incorreta"}
# curl --request POST \
 #  --url 'http://localhost:3000/users/login' \
  # --header 'Content-Type: application/json' \
   #--data '{
    # "username": "batista123",
     #"password": "securepassword2"
     #}'


# requisição mal formatada {"message":"Nome de usuário e senha são obrigatórios.   senha é obrigatória!"}
 #curl --request POST \
   #--url 'http://localhost:3000/users/login' \
   #--header 'Content-Type: application/json' \
  # --data '{
   #  "password": "Senha@123"
  #   }'