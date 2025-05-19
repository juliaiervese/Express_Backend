import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../services/api';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(form);
      toast.success('Registrado com sucesso!');
      navigate('/login');
    } catch (err) {
      toast.error(`Error saving user: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Cadastro</h2>
      <input
        name="username"
        placeholder="Usuário"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Registrando...' : 'Registrar'}
      </button>
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
        Já tem conta?{' '}
        <Link to="/login" style={{ color: 'var(--secondary-color)' }}>
          Entrar
        </Link>
      </p>
    </form>
  );
}