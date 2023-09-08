import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Movements({ element }) {
  const [showValue, setShowValue] = useState(false)

  return (
    <TouchableOpacity style={styles.container}
      onPress={() => setShowValue(!showValue)}>
      <Text style={styles.data}>{element.date}</Text>

      <View style={styles.singleMove}>
        <Text style={styles.moveName}>{element.label}</Text>
        {showValue ? (
          <Text
            style={element.type ? styles.income : styles.outcome}
          >
            {element.type ? `R$ ${element.value}` : `R$ -${element.value}`}
          </Text>
        ) : (
          <View style={styles.esqueleto}>
          </View>
        )}
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    paddingBottom: 5,
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA'
  },
  data: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16
  },
  singleMove: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moveName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  outcome: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e74c3c'
  },
  income: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2ecc71'
  },
  esqueleto: {
    width: 80,
    marginTop: 6,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 8
  }
})