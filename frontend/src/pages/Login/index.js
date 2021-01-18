import React, { useState } from 'react';
import api from '../../connection';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

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
    <>
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
    </>
  );
}
