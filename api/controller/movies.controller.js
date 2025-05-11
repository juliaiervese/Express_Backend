import * as moviesService from '../services/movies.service.js';

export const createMovie = async (req, res) => {
  try {
    const movie = await moviesService.createMovie(req.body, req.user.id);
    res.status(201).json(movie);
  } catch (err) {
    console.error('Erro ao criar filme:', err);
    res.status(500).json({ message: 'Erro ao criar filme', error: err.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await moviesService.getMovies(req.user.id);
    res.json(movies);
  } catch (err) {
    console.error('Erro ao listar filmes:', err);
    res.status(500).json({ message: 'Erro ao listar filmes', error: err.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await moviesService.getMovieById(req.params.id, req.user.id);
    if (!movie) return res.status(404).json({ message: 'Filme não encontrado' });
    res.json(movie);
  } catch (err) {
    console.error('Erro ao buscar filme:', err);
    res.status(500).json({ message: 'Erro ao buscar filme', error: err.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const updated = await moviesService.updateMovie(req.params.id, req.body, req.user.id);
    res.json(updated);
  } catch (err) {
    console.error('Erro ao atualizar filme:', err);
    res.status(500).json({ message: 'Erro ao atualizar filme', error: err.message });
  }
};

export const partialUpdateMovie = async (req, res) => {
  try {
    const updated = await moviesService.partialUpdateMovie(req.params.id, req.body, req.user.id);
    res.json(updated);
  } catch (err) {
    console.error('Erro ao patch de filme:', err);
    res.status(500).json({ message: 'Erro ao atualizar parcialmente o filme', error: err.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await moviesService.deleteMovie(req.params.id, req.user.id);
    res.status(204).send();
  } catch (err) {
    console.error('Erro ao excluir filme:', err);
    res.status(500).json({ message: 'Erro ao excluir filme', error: err.message });
  }
};
