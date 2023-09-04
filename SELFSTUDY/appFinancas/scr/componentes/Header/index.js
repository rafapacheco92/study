import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 120;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Rafael Pacheco</Text>

        <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000FF',
    height: statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 80,
    paddingBottom: 300,
  }
})