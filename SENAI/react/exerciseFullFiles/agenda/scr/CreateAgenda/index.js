import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

export default function CreateAgenda({ data }) {
 return (
   <View style={styles.container}>
    <TouchableOpacity
    style={styles.button}>
        <Text>x</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.button}>
        <Ionicons name="create-outline" size={35} color="#000" />
    </TouchableOpacity>
    <Text>{data.compromisso}</Text>
    <Text>{data.data}</Text>
    <Text>{data.hora}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 300
    }
})