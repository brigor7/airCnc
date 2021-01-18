import React, { useState, useEffect } from 'react';
import api from '../../connection';

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
            <header />
            <strong>{spot.company}</strong>
            <span>{spot.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
