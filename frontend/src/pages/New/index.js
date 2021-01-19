import React, { useState, useMemo } from 'react';
import api from '../../connection';
import camera from '../../assets/camera.svg';
import './style.css';

export default function New({ history }) {
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState('');
  const [techs, setTechs] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const data = new FormData();
  const user_id = localStorage.getItem('user');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();
    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    console.log(data);

    await api.post('/spots', data, {
      headers: { user_id },
    });
    history.push('/dashboard');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          id="thumbnail"
          style={{ backgroundImage: `url(${preview})` }}
          className={thumbnail ? 'has-thumbnail' : ''}
        >
          <input
            type="file"
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
            }}
          />
          <img src={camera} alt="Selecione sua imagem" />
        </label>
        <label htmlFor="company">Empresa *</label>
        <input
          id="company"
          placeholder="sua empresa incrivel"
          type="text"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <label htmlFor="techs">
          Tecnologias* <span>(Separadas por virgula)</span>
        </label>
        <input
          id="techs"
          placeholder="Informe as tecnologias separadas por virgula"
          type="text"
          value={techs}
          onChange={(e) => {
            setTechs(e.target.value);
          }}
        />
        <label htmlFor="price">
          Valor diária* <span>(Em branco para gratuíto)</span>
        </label>
        <input
          id="price"
          placeholder="Informe o valor da diária"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  );
}
