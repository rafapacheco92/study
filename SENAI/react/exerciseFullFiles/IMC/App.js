import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  let [peso, setPeso] = useState('')
  let [altura, setAltura] = useState('')
  let [resultado, setResultado] = useState('')

  function calc(){
    let imc = peso / (altura*altura)
    setResultado(imc)
  }

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.title}>Digite seu peso:</Text>
        <View style={styles.inputView}>
        <TextInput
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        />
        <Text style={styles.medida}>KG</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.title}>Digite sua altura:</Text>
        <View style={styles.inputView}>
          <TextInput
          style={styles.input}
          onChangeText={setAltura}
          value={altura}
          />
          <Text style={styles.medida}>M</Text>
        </View>
      </View>
      <TouchableOpacity
      onPress={calc}>
        <Text style={styles.button}>Calcular</Text>
      </TouchableOpacity>

      <Text>{resultado}</Text>

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
    gap: 30
  },
  fieldContainer: {
    gap: 10,
    alignItems: 'center',
  },
  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    gap: 2
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22
  },
  input: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 4,
    height: 30,
    marginBottom: 10,
    width: 70,
    padding: 5,
    textAlign: 'center',
    fontSize: 25
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 10,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  medida: {
    fontSize: 25
  },
});
