import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 120;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>

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
    paddingTop: statusBarHeight,
    paddingBottom: 50,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonUser: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 99,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  }
})