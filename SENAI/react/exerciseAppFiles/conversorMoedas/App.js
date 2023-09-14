import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function App() {

  let [entradaReal, setEntradaReal] = useState('')
  let [saidaDolar, setSaidaDolar] = useState('')

  let [entradaDolar, setEntradaDolar] = useState('')
  let [saidaReal, setSaidaReal] = useState('')

  let [entradaReal2, setEntradaReal2] = useState('')
  let [saidaEuro, setSaidaEuro] = useState('')

  let [entradaEuro, setEntradaEuro] = useState('')
  let [saidaReal2, setSaidaReal2] = useState('')

  let [entradaReal3, setEntradaReal3] = useState('')
  let [saidaLibra, setSaidaLibra] = useState('')

  let [entradaLibra, setEntradaLibra] = useState('')
  let [saidaReal3, setSaidaReal3] = useState('')
  

  function calcRD(){
    let valorDolar = 4.89
    let conversao = Number(entradaReal) / valorDolar  
    setSaidaDolar(`U$${(conversao).toFixed(2)}`)
  }

  function calcDR(){
    let valorReal = .2
    let conversao = Number(entradaDolar) / valorReal  
    setSaidaReal(`R$${(conversao).toFixed(2)}`)
  }

  function calcRE(){
    let valorEuro = 5.37
    let conversao = Number(entradaReal2) / valorEuro  
    setSaidaEuro(`€$${(conversao).toFixed(2)}`)
  }

  function calcER(){
    let valorReal = .19
    let conversao = Number(entradaEuro) / valorReal  
    setSaidaReal2(`R$${(conversao).toFixed(2)}`)
  }

  function calcRL(){
    let valorLibra = 6.2
    let conversao = Number(entradaReal3) / valorLibra  
    setSaidaLibra(`£$${(conversao).toFixed(2)}`)
  }

  function calcLR(){
    let valorReal = .16
    let conversao = Number(entradaLibra) / valorReal 
    setSaidaReal3(`R$${(conversao).toFixed(2)}`)
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Casa de Câmbio</Text>

      <View style={[styles.cardEven, styles.card]}>
        <Text style={styles.cardContent}>Real x Dolar</Text>
        <TextInput 
        style={[styles.inputEven, styles.input]}
        onChangeText={setEntradaReal}
        value={entradaReal}
        keyboardType='numeric'
        />
        <TouchableOpacity 
        style={[styles.buttonEven, styles.button]}
        onPress={calcRD}
        >
        <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{saidaDolar}</Text>
      </View>

      <View style={[styles.cardPair, styles.card]}>
        <Text style={styles.cardContent}>Dolar x Real</Text>
        <TextInput 
        style={[styles.inputPair, styles.input]}
        onChangeText={setEntradaDolar}
        value={entradaDolar}
        keyboardType='numeric'
        />
        <TouchableOpacity 
        style={[styles.buttonPair, styles.button]}
        onPress={calcDR}>
        <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{saidaReal}</Text>
      </View>



      <View style={[styles.cardEven, styles.card]}>
        <Text style={styles.cardContent}>Real x Euro</Text>
        <TextInput 
        style={[styles.inputEven, styles.input]}
        onChangeText={setEntradaReal2}
        value={entradaReal2}
        keyboardType='numeric'
        />
        <TouchableOpacity 
        style={[styles.buttonEven, styles.button]}
        onPress={calcRE}
        >
        <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{saidaEuro}</Text>
      </View>

      <View style={[styles.cardPair, styles.card]}>
        <Text style={styles.cardContent}>Euro x Real</Text>
        <TextInput 
        style={[styles.inputPair, styles.input]}
        onChangeText={setEntradaEuro}
        value={entradaEuro}
        keyboardType='numeric'
        />
        <TouchableOpacity 
        style={[styles.buttonPair, styles.button]}
        onPress={calcER}>
        <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{saidaReal2}</Text>
      </View>



      <View style={[styles.cardEven, styles.card]}>
        <Text style={styles.cardContent}>Real x Libra</Text>
        <TextInput 
        style={[styles.inputEven, styles.input]}
        onChangeText={setEntradaReal3}
        value={entradaReal3}
        keyboardType='numeric'
        />
        <TouchableOpacity 
        style={[styles.buttonEven, styles.button]}
        onPress={calcRL}
        >
        <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{saidaLibra}</Text>
      </View>

      <View style={[styles.cardPair, styles.card]}>
        <Text style={styles.cardContent}>Libra x Real</Text>
        <TextInput 
        style={[styles.inputPair, styles.input]}
        onChangeText={setEntradaLibra}
        value={entradaLibra}
        keyboardType='numeric'
        />
        <TouchableOpacity 
        style={[styles.buttonPair, styles.button]}
        onPress={calcLR}>
        <Text style={styles.textButton}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{saidaReal3}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#053276',
    marginTop: 60
  },
  card: {
    width: '95%',
    height: 200,
    borderWidth: 5,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  cardEven: {
    backgroundColor: '#00B9E8',
    borderColor: '#1F75FE',
  },
  cardPair: {
    backgroundColor: '#1F75FE',
    borderColor: '#00B9E8',

  },
  cardContent: {
      textAlign: 'center',
      color: '#4D4730',
      fontWeight: 'bold',
      fontSize: 20,
    },
  input: {
    borderWidth: 2,
    borderRadius: 4,
    width: '40%',
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputEven: {
    borderColor: '#1F75FE',
  },
  inputPair: {
    borderColor: '#00B9E8',
  },
  button:{
    borderRadius: 4,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonEven: {
    backgroundColor: '#1F75FE',
  },
  buttonPair: {
    backgroundColor: '#00B9E8',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  result: {
    color: '#053276',
    fontWeight: 'bold',
    fontSize: 20
  }
});
