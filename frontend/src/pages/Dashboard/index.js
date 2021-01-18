import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../connection';
import './style.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  async function loadSpot() {
    try {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', { headers: { user_id } });

      setSpots(response.data);
    } catch (error) {
      console.log('Ocorreu um erro em /spot' + error);
    }
  }
  useEffect(() => {
    loadSpot();
  }, []);
  return (
    <>
      <ul className="spot-list">
        {spots.map((spot) => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$ ${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">Cadastrar novo spot</Link>
    </>
  );
}
