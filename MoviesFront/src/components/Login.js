import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(form);
      setToken(data.token);
      toast.success('Login realizado');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>
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
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
        Ainda não tem conta?{' '}
        <Link to="/register" style={{ color: 'var(--secondary-color)' }}>
          Registre-se
        </Link>
      </p>
    </form>
  );
}