import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

let properties = ['marca', 'modelo', 'ano', 'km']
let carrosDB = [{marca: 'honda', modelo: 'civic', ano: 2023, km: 22000}, {marca: 'vw', modelo: 'fusca', ano: 1969, km: 2200000}, {marca: 'volvo', modelo: 'v40', ano: 2014, km: 70000}]

export default function App() {

  let [modelo, setModelo] = useState('')
  let [marca, setMarca] = useState('')
  let [ano, setAno] = useState('')
  let [km, setKm] = useState('')
  let [pesquisa, setPesquisa] = useState('')

  function handleCadastro() {
    if (marca && modelo && ano && km){
    let carro = {
      marca: marca,
      modelo: modelo,
      ano: ano,
      km: km
    }
    
    carrosDB.push(carro)
    setModelo('')
    setMarca('')
    setAno('')
    setKm('')
  }else{
    alert('Preencha todos os campos')
  }
  }


  function handlePesquisa() {

    for(let i = 0; i < carrosDB.length; i++) {
      for(key in carrosDB[i]) {
        console.log(key)
        console.log(carrosDB[i][key])
        if(carrosDB[i][key] == pesquisa) {
          setMarca(carrosDB[i].marca)
          setModelo(carrosDB[i].modelo)
          setAno(carrosDB[i].ano.toString())
          setKm(carrosDB[i].km.toString())
          return carrosDB[i]
      }
      }
    }

  }


  function handleDelete() {
    let deleteItem = handlePesquisa();
    let index = carrosDB.indexOf(deleteItem)
    carrosDB.splice(index, 1)
    setModelo('')
    setMarca('')
    setAno('')
    setKm('')
  }

  function handleEdit() {
    let editItem = handlePesquisa();
    editItem.marca = marca;
    editItem.modelo = modelo;
    editItem.ano = ano;
    editItem.km = km;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro de Veículos</Text>
      <Text style={styles.label}>Pesquisar por modelo</Text>
      <TextInput 
      style={styles.input}
      value={pesquisa}
      onChangeText={setPesquisa}
      />
      <Text style={styles.label}>Marca</Text>
      <TextInput 
      style={styles.input}
      value={marca}
      onChangeText={setMarca}
      />
      <Text style={styles.label}>Modelo</Text>
      <TextInput 
      style={styles.input}
      value={modelo}
      onChangeText={setModelo}
      />
      <Text style={styles.label}>Ano</Text>
      <TextInput 
      style={styles.input}
      value={ano}
      onChangeText={setAno}
      />
      <Text style={styles.label}>KM</Text>
      <TextInput 
      style={styles.input}
      value={km}
      onChangeText={setKm}
      />
      <View style={styles.line}>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleCadastro}>
        <Text style={styles.textButton}>CADASTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleDelete}>
        <Text style={styles.textButton}>DELETE</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={handlePesquisa}>
        <Text style={styles.textButton}>PESQUISAR</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleEdit}>
        <Text style={styles.textButton}>EDITAR</Text>
      </TouchableOpacity>
      </View>


        <View>

        {carrosDB.map((carro, index) => (
          <Text key={index}>{carro.marca} - {carro.modelo} - {carro.ano} - {carro.km}</Text>
        ))}

        </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fb5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 4,
    height: 30,
    marginBottom: 10,
    width: 200
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textButton: {
    color: '#fb5',
  },
  line: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
  }
});
