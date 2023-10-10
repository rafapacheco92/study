import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { useMyContext } from './scr/contexts/MyContext';
import { MyContextProvider } from './scr/contexts/MyContext';
import { Ionicons } from '@expo/vector-icons'

import CreateAgenda from './scr/CreateAgenda'
const { agenda } = useMyContext();


export default function App() {

  let [id, setId] = useState(1)
  let [compromisso, setCompromisso] = useState('')
  let [data, setData] = useState('')
  let [hora, setHora] = useState('')
  

  function add(){
    let comp = {}
    comp.id = id
    comp.compromisso = compromisso
    comp.data = data
    comp.hora = hora
    agenda.push(comp)
    setId(id + 1)
    setCompromisso('')
    setData('')
    setHora('')
  }

  return (
    <MyContextProvider style={styles.container}>
      <View style={styles.insert}>
        <View style={styles.field}>
          <Text style={styles.texto}>Compromisso</Text>
          <TextInput 
          style={[styles.input, {width: 150}]}
          value={compromisso}
          onChangeText={setCompromisso}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.texto}>Data</Text>
          <TextInput 
          style={[styles.input, {width: 85}]}
          value={data}
          onChangeText={setData}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.texto}>Hora</Text>
          <TextInput 
          style={[styles.input, {width: 50}]}
          value={hora}
          onChangeText={setHora}
          />
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={add}>
          <Ionicons name="add-outline" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.flat}>
      <FlatList
        data={agenda}
        renderItem={({ item }) => <CreateAgenda data={item} />}
      />
      </View>
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 120,
    gap: 50
  },
  insert: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  input: {
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 4,
    height: 30,
    marginBottom: 10,
    padding: 5,
    color: '#FFF',
    fontWeight: 'bold',
  },
  texto: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
    padding: 3,
    borderRadius: 3,
    marginTop: 9
},
});
