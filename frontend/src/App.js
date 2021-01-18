import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e<br />
          encontre <strong>talentos</strong> para sua empresa
        </p>
        <form action="#">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Seu melhor email" />
          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
