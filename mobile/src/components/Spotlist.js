import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api from './../services/api';

export default function Spotlist({ tech }) {
  const [spots, setSpots] = useState(null);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('spots', {
        params: { tech },
      });
      console.log(response.data);
    }
  }, []);

  return (
    <View>
      <Text>Tecnologia: {tech}</Text>
    </View>
  );
}
