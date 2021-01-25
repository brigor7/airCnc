import React from 'react';
import {
  SafeAreaView,
  AsyncStorage,
  TouchableOpacity,
  Text,
  DatePickerAndroid,
  StyleSheet,
} from 'react-native';
import api from '../services/api';

export default function Book({ navigation }) {
  const spot_id = navigation.getParam('id');
  const user_id = AsyncStorage.getItem('user_id');

  function handleSubmit() {}
  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Data de interesse</Text>

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Solicitar reserva</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel}>
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
