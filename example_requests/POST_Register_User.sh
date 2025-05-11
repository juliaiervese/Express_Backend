 #source ./requests/POST_Register_User.sh

 #registro bem-sucedido 
 #curl --request POST \
  #--url 'http://localhost:3000/users/register' \
   #--header 'Content-Type: application/json' \
   #--data '{
    #"name": "batista",
     #"username": "batista123",
     #"password": "Senha@123"
   #}'


# requisição mal formatada {"message":"Nome, Nome de usuário,senha é inválida!"}
 #curl --request POST \
   #--url 'http://localhost:3000/users/register' \
   #--header 'Content-Type: application/json' \
   #--data '{
    #"name": "Another User",
   #  "password": "Senha@123"
  # }'

# senha inválida {"message":"A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial"}
 #curl --request POST \
   #--url 'http://localhost:3000/users/register' \
   #--header 'Content-Type: application/json' \
   #--data '{
     #"name": "New User Name 3",
    # "username": "newuserUsername3",
   #  "password": "dakldmkls"
  # }'