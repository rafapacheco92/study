import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({ saldo, gastos }) {
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.titleText}>Saldo</Text>
        <Text style={styles.titleText}>Gastos</Text>
      </View>
      <View style={styles.values}>
        <View style={styles.value}>
          <Text style={styles.currensy}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.currensy}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: -20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5
  },
  titles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 20
  },
  values: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  value: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  currensy: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71'
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c'
  }
})