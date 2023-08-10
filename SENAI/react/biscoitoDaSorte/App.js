import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';


export default function App() {

  let [bixcoito, imgBixcoito] = useState(require('./images/biscoito.png'))

  let [frase, setFrase] = useState('Sorte ou Azar?')

  let frases = ["Aquilo não era frango", 
  "Se você comer algo e ninguém vê você comendo, aquilo não tem calorias", 
  "Me ajuda, eu estou sendo mantido prisioneiro em uma padaria chinesa", 
  "Se você acha que eu vou resumir toda a sua vida nesse pedacinho de papel você tá louco", 
  "Se você acha que ninguém liga que você está vivo, tente não pagar suas contas", 
  "Você está prestes a terminar de ler um biscoito da sorte", 
  "Três pessoas podem guardar um segredo, se você se livrar das outras duas",
  "Um novo romance está no seu futuro. Ignore a frase anterior", 
  "Nunca faça nada pela meta", 
  "Não faça apostas desnecessárias, números da sorte: 12, 14, 17, 20, 28, 36", 
  "Quando você espreme uma laranja, suco de laranja sai dela - porque isso é o que esta dentro", 
  "Você ri agora, mas espera chegar em casa",
  "Eu não posso te ajudar, eu sou só um biscoito", 
  "Você está prestes a ficar $8,95 mais pobre. ($6,95 se não escolheu o buffet)", 
  "Não pergunte o que seu biscoito pode fazer por você, pergunte o que você pode fazer por seu biscoito", 
  "Você não é analfabeto"]

  function breakBixcoito() {
    let n = Math.floor(Math.random() * frases.length)
    setFrase(frases[n])
    imgBixcoito(require('./images/biscoitoAberto.png'))
  }

  function zerar(){
    setFrase('Sorte ou Azar?')
    imgBixcoito(require('./images/biscoito.png'))
  }


  return (
    <View style={styles.container}>
      <Image 
      style={styles.imagem}
      source={bixcoito}
      />
      <Text style={styles.text}>{frase}</Text>
      <TouchableOpacity style={styles.button} onPress={ breakBixcoito }>
        <Text style={styles.textButton}>Quebrar o bixcoito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={ zerar }>
        <Text style={styles.textButton}>Novo bixcoito</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#3FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  imagem: {
    width: 300,
    height: 300,
    marginBottom: 50
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    color: '#333'
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
