import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

let grupos = []

export default function App() {

  let [intUm, setIntUm] = useState('')
  let [intDois, setIntDois] = useState('')
  let [intTres, setIntTres] = useState('')
  let [intQuatro, setIntQuatro] = useState('')
  let [nomeProjeto, setNomeProjeto] = useState('')
  let [pesquisa, setPesquisa] = useState('')

  function handleCadastro() {
    if (intUm && nomeProjeto){
      let integrantes = {
      integranteUm: intUm,
      integranteDois: intDois,
      integranteTres: intTres,
      integranteQuatro: intQuatro
      }
      
      let grupo = {nomeProjeto, integrantes}
    
    grupos.push(grupo)
    setIntUm('')
    setIntDois('')
    setIntTres('')
    setIntQuatro('')
  }else{
    alert('Preencha todos os campos')
  }
  }


  function handlePesquisa() {

    for(let i = 0; i < grupos.length; i++) {
      for(key in grupos[i]) {
        console.log(key)
        console.log(grupos[i][key])
        if(grupos[i][key] == pesquisa) {
          setIntUm(grupos[i].integranteUm)
          setIntDois(grupos[i].integranteDois)
          setIntTres(grupos[i].integranteTres)
          setIntQuatro(grupos[i].integranteQuatro)
          return grupos[i]
      }
      }
    }

  }


  function handleDelete() {
    let deleteItem = handlePesquisa();
    let index = grupos.indexOf(deleteItem)
    grupos.splice(index, 1)
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
      <Text style={styles.text}>GRUPOS SA</Text>
      <Text style={styles.label}>Nome do Projeto</Text>
      <TextInput 
      style={styles.input}
      value={nomeProjeto}
      onChangeText={setNomeProjeto}
      />
      <Text style={styles.label}>Integrante 1</Text>
      <TextInput 
      style={styles.input}
      value={intUm}
      onChangeText={setIntUm}
      />
      <Text style={styles.label}>Integrante 2</Text>
      <TextInput 
      style={styles.input}
      value={intDois}
      onChangeText={setIntDois}
      />
      <Text style={styles.label}>Integrante 3</Text>
      <TextInput 
      style={styles.input}
      value={intTres}
      onChangeText={setIntTres}
      />
      <Text style={styles.label}>Integrante 4</Text>
      <TextInput 
      style={styles.input}
      value={intQuatro}
      onChangeText={setIntQuatro}
      />
      <Text style={styles.label}>Pesquisar</Text>
      <TextInput 
      style={styles.input}
      value={pesquisa}
      onChangeText={setPesquisa}
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

        {grupos.map((grupo, index) => (
          <Text key={index}>Projeto: {grupo.nomeProjeto} - Grupo: {grupo.integrantes.integranteUm} - {grupo.integrantes.integranteDois} - {grupo.integrantes.integranteTres} - {grupo.integrantes.integranteQuatro}</Text>
        ))}

        </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FB339',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 4,
    height: 30,
    marginBottom: 10,
    width: 200,
    padding: 5
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
    marginBottom: 10,
  },
  textButton: {
    color: '#8FB339',
  },
  line: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
  }
});
