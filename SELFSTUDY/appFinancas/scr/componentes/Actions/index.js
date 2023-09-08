import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.act}>
        <View style={styles.button}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.buttonLabel}>Entradas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.act}>
        <View style={styles.button}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.buttonLabel}>Boletos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.act}>
        <View style={styles.button}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.buttonLabel}>Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.act}>
        <View style={styles.button}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.buttonLabel}>Cartões</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.act}>
        <View style={styles.button}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.buttonLabel}>Entradas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 84,
    marginTop: 18,
    marginBottom: 18,
    paddingLeft: 30,
    paddingRight: 30,
  },
  act: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 35,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
  }
})