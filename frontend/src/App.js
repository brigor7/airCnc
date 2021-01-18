import React, { useState } from 'react';
import api from './connection';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const newUser = await api.post('/sessions', email);
      //localStorage('user_id', newUser.data._id);
      console.log(newUser);
    } catch (error) {
      console.log('Erro ao realizar get em /session: ' + error);
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
