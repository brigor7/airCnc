import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from './connection';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/sessions', { email });
      const { message } = response.data;
      const { _id } = message;
      localStorage.setItem('user', _id);
      history.push('/dashboard');
    } catch (error) {
      console.log('Erro ao realizar post em /sessions: ' + error);
    }
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e<br />
          encontre <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Seu melhor email" />
          <button
            className="btn"
            type="submit"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
