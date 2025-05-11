import express from 'express';
import exampleController from '../controller/example.controller.js'; // Importando corretamente
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

// Definindo o método POST para a rota
router.post('/', verifyToken, exampleController.securedExampleProcess);  // Para POST

// Definindo o método GET para a mesma rota
router.get('/', verifyToken, exampleController.securedExampleProcess);  // Para GET

export default router;
