import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  let [dadoInicial, imgDado] = useState(require('./imagens-dado/outras/dice-target.png'))

  function dadosRolando(){
    imgDado(require('./imagens-dado/outras/dice-target.png'));
    
    setTimeout(() => {
      sorteio()
    }, 1000);
  }

  function sorteio() {
    let n = Math.floor(Math.random() * (7 - 1) + 1)
    //dadosRolando()

    switch (n) {
      case 1: 
              imgDado(require('./imagens-dado/1.png'))
              break
      case 2: 
              imgDado(require('./imagens-dado/2.png'))
              break
      case 3: 
              imgDado(require('./imagens-dado/3.png'))
              break
      case 4: 
              imgDado(require('./imagens-dado/4.png'))
              break
      case 5: 
              imgDado(require('./imagens-dado/5.png'))
              break
      case 6: 
              imgDado(require('./imagens-dado/6.png'))
              break
    }
  }

  return (
    <View style={styles.container}> 
      <Image 
      style={styles.imagem}
      source={dadoInicial}
      />
      <TouchableOpacity style={styles.button} onPress={ dadosRolando }>
        <Text style={styles.textButton}>Clique</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#333',
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    
  },
  textButton: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#389745',
    fontFamily: 'Helvetica',

  },
  numero: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#389745',
    
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 40,
    borderRadius: 30,
  }
});
