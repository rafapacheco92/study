import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

import CreateAgenda from './scr/CreateAgenda'

export default function App() {

  let [compromisso, setCompromisso] = useState('')
  let [data, setData] = useState('')
  let [hora, setHora] = useState('')
  let agenda = [
    {
      id: 1,
      compromisso: 'aniversário',
      data: '19/12/2023',
      hora: '19:23'
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.insert}>
        <View style={styles.field}>
          <Text>Compromisso</Text>
          <TextInput 
          style={[styles.input, {width: 150}]}
          value={compromisso}
          onChangeText={setCompromisso}
          />
        </View>
        <View style={styles.field}>
          <Text>Data</Text>
          <TextInput 
          style={styles.input}
          value={data}
          onChangeText={setData}
          />
        </View>
        <View style={styles.field}>
          <Text>Compromisso</Text>
          <TextInput 
          style={styles.input}
          value={hora}
          onChangeText={setHora}
          />
        </View>
      </View>

      <View style={styles.flat}>
      <FlatList
        data={agenda}
        renderItem={({ item }) => <CreateAgenda data={item} />}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90
  },
  insert: {
    flexDirection: 'row',
  },
  field: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 4,
    height: 30,
    marginBottom: 10,
    padding: 5
  },
});
