// src/components/Dashboard.js

import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { fetchMovies, createMovie, updateMovie, deleteMovie } from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const { token, logout } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', genre: '' });

  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchMovies(token);
      setMovies(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [token]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!form.title || !form.genre) {
      toast.error('Preencha título e gênero');
      return;
    }
    // Define campos padrão que o backend exige
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const watchedAt = `${yyyy}-${mm}-${dd}`;
    const rating = 1;

    const payload = { ...form, watchedAt, rating };
    try {
      console.log('>> criando filme com payload:', payload);
      await createMovie(token, payload);
      toast.success('Filme adicionado');
      setForm({ title: '', genre: '' });
      loadMovies();
    } catch (err) {
      console.error('Erro ao criar filme:', err);
      toast.error(`Erro ao criar filme: ${err.message}`);
    }
  };

  const handleEdit = async movie => {
    const newTitle = prompt('Novo título', movie.title);
    const newGenre = prompt('Novo gênero', movie.genre);
    if (!newTitle && !newGenre) return;
    const updated = {
      title: newTitle || movie.title,
      genre: newGenre || movie.genre,
      watchedAt: movie.watchedAt,
      rating: movie.rating,
    };
    try {
      await updateMovie(token, movie._id, updated);
      toast.success('Filme atualizado');
      loadMovies();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('Deseja excluir este filme?')) return;
    try {
      await deleteMovie(token, id);
      toast.success('Filme removido');
      loadMovies();
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return <p className="loading">Carregando...</p>;
  }

  return (
    <div className="dashboard">
      <header>
        <h2>Meus Filmes</h2>
        <button onClick={logout} className="logout-btn">Logout</button>
      </header>

      <div className="add-form">
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="genre"
          placeholder="Gênero"
          value={form.genre}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Adicionar</button>
      </div>

      <ul>
        {movies.map(m => (
          <li key={m._id}>
            <span>{m.title} ({m.genre})</span>
            <div>
              <button onClick={() => handleEdit(m)}>✏️</button>
              <button onClick={() => handleDelete(m._id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
