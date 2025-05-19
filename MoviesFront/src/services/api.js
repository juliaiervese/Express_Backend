// Handler para responses
async function handleResponse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || 'Erro na requisição');
  }
  return data;
}

// Registro de usuário (username + password)
export function register({ username, password }) {
  return fetch('/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }).then(handleResponse);
}

// Login de usuário (username + password)
export function login({ username, password }) {
  return fetch('/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }).then(handleResponse);
}

// Busca filmes
export function fetchMovies(token) {
  return fetch('/movies', {
    headers: { Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

// Cria filme
export function createMovie(token, movie) {
  return fetch('/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  }).then(handleResponse);
}

// Atualiza filme por ID
export function updateMovie(token, id, movie) {
  return fetch(`/movies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  }).then(handleResponse);
}

// Deleta filme por ID
export function deleteMovie(token, id) {
  return fetch(`/movies/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}