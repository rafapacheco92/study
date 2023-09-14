import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  let [contador, setContador] = useState(0)

  function contar() {
    setContador(contador+1)
  }

  function zerar() {
      setContador(0)
    }

  
  return (
    <View style={styles.container}> 
      <Text style={styles.h1}>Login</Text>
      <Text style={styles.texto}>{contador}</Text>
      <Button title='Contar' onPress={contar} />
      <Button title='Zerar' onPress={zerar} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 100,
    fontFamily: 'Helvetica',
  },
  texto: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 500,
    fontFamily: 'Helvetica',
  }
});
