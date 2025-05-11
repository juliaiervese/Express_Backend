import express from 'express';
import jwtMiddleware from '../middleware/jwt.token.middleware.js';
import * as moviesCtrl from '../controller/movies.controller.js';

const router = express.Router();


router.use(jwtMiddleware);

router.post(   '/', moviesCtrl.createMovie);
router.get(    '/', moviesCtrl.getMovies);
router.get(    '/:id', moviesCtrl.getMovieById);
router.put(    '/:id', moviesCtrl.updateMovie);
router.patch(  '/:id', moviesCtrl.partialUpdateMovie);
router.delete( '/:id', moviesCtrl.deleteMovie);

export default router;
