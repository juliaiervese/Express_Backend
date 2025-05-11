// api/index.js
import 'dotenv/config'                // → carrega o .env **antes** de tudo
import express from 'express';
import morgan  from 'morgan';
import cors    from 'cors';

import db               from './database/configdb.js';
import userRoutes      from './routes/user.routes.js';
import exampleRoutes   from './routes/example.route.js';
import jwtMiddleware   from './middleware/jwt.token.middleware.js';
import moviesRoutes    from './routes/movies.route.js';

db.connect();                        // aqui as ENV já existem!

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

// rotas públicas de usuário
app.use('/users', userRoutes);

// rota de exemplo protegida
app.use('/securedExampleRoute', jwtMiddleware, exampleRoutes);

// → mount das rotas de filmes (todas já têm jwtMiddleware internamente)
app.use('/movies', moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
