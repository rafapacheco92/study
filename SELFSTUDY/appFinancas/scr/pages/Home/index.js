import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Header from '../../componentes/Header'
import Balance from '../../componentes/Balance';

export default function Home() {
  return (
    <View>
      <Header name="Rafael Pacheco" />

      <Balance saldo="14.392,00" gastos="3.211,00" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
})