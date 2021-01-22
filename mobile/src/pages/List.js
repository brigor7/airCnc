import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  AsyncStorage,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import logo from './../assets/logo.png';
import Spotlist from './../components/Spotlist';

export default function List({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then((tech) => {
      if (!tech) {
        navigation.navigate('Login');
      }
    });
    AsyncStorage.getItem('techs')
      .then((storageTechs) => {
        const techsArray = storageTechs.split(',').map((tech) => tech.trim());
        setTechs(techsArray);
      })
      .catch((error) => {
        console.log('Erro ao carregar techs: ' + error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      {techs.map((tech) => (
        <Spotlist
          tech={tech}
          key={() => {
            let i = i + 1;
          }}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
  },
});
