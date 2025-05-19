# Movies Front + Integração
* Videos: https://www.loom.com/share/633c7021511f458bbb47b5a387106546?sid=14c1714c-a947-4846-8933-d93902d47623
* https://www.loom.com/share/451a1a9c0ca241b18f2105c2576c2708?sid=a2fea6b0-4a93-41ee-9630-1d9f65987caf
* Atlas: https://cloud.mongodb.com/v2/6816773cab74c7716a76e5b7#/metrics/replicaSet/681677d2cea5cf1e34713e5e/explorer/example/users/find
 
````
# Movies App

**Aplicação Full-Stack** para cadastro de usuários e gerenciamento de filmes com frontend em React e backend em Node.js/Express + MongoDB.


## Pré-requisitos

- **Node.js** v14+  
- **npm** (ou Yarn)  
- **Docker** & **Docker Compose**  
- Git

---

## Clonar Repositório

```bash
git clone <URL_DO_SEU_REPO>
cd express_backend
````

---

## Configurar e Iniciar Backend

1. Instale dependências:

   ```bash
   npm install
   ```
2. Copie e ajuste variáveis de ambiente:

   ```bash
   cp .env.example .env
   # Edite .env se necessário:
   # PORT=3000
   # MONGO_URI=mongodb://root:example@localhost:27017
   # MONGO_DB_NAME=example
   # JWT_SECRET=sua_chave_secreta
   ```
3. Suba o MongoDB (via Docker Compose):

   ```bash
   npm run start:database
   ```
4. Inicie o servidor Express:

   ```bash
   npm run start:app
   ```
5. Verifique:

   ```
   MongoDB conectado com sucesso!
   Server running at http://localhost:3000/
   ```

---

## Configurar e Iniciar Frontend

1. Abra nova aba/terminal em `movies-frontend/`:

   ```bash
   cd ../movies-frontend
   npm install
   ```
2. (Opcional) Evite conflito de portas instalando `cross-env`:

   ```bash
   npm install --save-dev cross-env
   ```

   No `package.json`, ajuste:

   ```diff
   "scripts": {
   ```

* "start": "react-scripts start",

- "start": "cross-env PORT=3001 react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test"
  },

````
3. Garanta no mesmo `package.json`:
```json
"proxy": "http://localhost:3000",
````

4. Inicie o frontend:

   ```bash
   npm start
   ```
5. Abra no navegador:

   ```
   http://localhost:3001/register
   ```

---

## Fluxo de Uso

1. **Cadastro**

   * Acesse `http://localhost:3001/register`
   * Informe **Usuário** e **Senha**
   * Clique em **Registrar** → redireciona para `/login`

2. **Login**

   * Acesse `http://localhost:3001/login`
   * Informe **Usuário** e **Senha**
   * Clique em **Entrar** → redireciona para `/dashboard`

3. **Dashboard (área protegida)**

   * **Adicionar filme**: preencha **Título** e **Gênero**, clique em **Adicionar**
   * **Editar filme**: clique em ✏️, altere no prompt
   * **Excluir filme**: clique em 🗑️
   * **Logout**: clica em **Logout** para voltar ao login

---

## Comandos Úteis

### Backend

```bash
# Instalar deps e subir MongoDB
npm install
npm run start:database

# Iniciar Express (porta 3000)
npm run start:app
```

### Frontend

```bash
# Instalar deps e iniciar React (porta 3001)
cd movies-frontend
npm install
npm start



