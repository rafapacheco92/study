import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';

import Header from '../../componentes/Header'
import Balance from '../../componentes/Balance';
import Movements from '../../componentes/Movements'
import Actions from '../../componentes/Actions'

const moving = [
  {
    id: 1,
    label: 'Boleto Conta Luz',
    value: '300,90',
    date: '17/08/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '2.900,00',
    date: '19/08/2023',
    type: 1
  },
  {
    id: 3,
    label: 'Salário',
    value: '11.000',
    date: '05/09/2023',
    type: 1
  }
]


export default function Home() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.content}> */}
      <Header name="Rafael Pacheco" />

      <Actions />

      <Balance saldo="14.392,00" gastos="3.211,00" />

      <Text style={styles.title}>
        Últimas Movimentações
      </Text>

      <FlatList
        style={styles.list}
        data={moving}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements element={item} />}
      />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  // content: {
  //   color: '#8000FF',
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 30,
  },
})