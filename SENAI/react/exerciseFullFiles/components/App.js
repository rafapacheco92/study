import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0)
  
  function aumentar() {
    setContador(contador+1)
  }
  function diminuir() {
    setContador(contador-1)
  }

  return (
    <View style={styles.container}>
      <Button title='+' onPress={aumentar}/>
      { contador }
      <Button title='-' onPress={diminuir}/>
      {/* { contador > 10 && <Componente1/>} */}
      { contador  >= 5 ? <Componente1 /> : <Componente2 />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Componente1(){
  return(
    <Text>Texto Textudo</Text>
  )
}

function Componente2(){
  return(
    <Text>Texto Textinho</Text>
  )
}