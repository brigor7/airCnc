import React, { useState } from 'react';
import {
  SafeAreaView,
  AsyncStorage,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import api from '../services/api';

export default function Book({ navigation }) {
  const spot_id = navigation.getParam('id');
  const [data, setData] = useState('');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(
      `/spot/${spot_id}/booking`,
      { data },
      {
        headers: { user_id },
      }
    );
    Alert.alert('Solicitação de reserva enviada!');
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Data de interesse</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual data voce quer reservar?"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={true}
        keyboardType="default"
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Solicitar reserva</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 50,
  },
  label: {
    marginTop: 30,

    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    height: 32,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  buttonCancel: {
    height: 32,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
