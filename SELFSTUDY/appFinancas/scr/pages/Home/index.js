import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Header from '../../componentes/Header'

export default function Home() {
  return (
    <View>
      <Header />
      <Text>Rafael Pacheco</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
})