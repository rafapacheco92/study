import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useMyContext } from '../contexts/MyContext';
import { Ionicons } from '@expo/vector-icons'

const { agenda } = useMyContext();

export default function CreateAgenda({ data }) {
    
    function del(){
        console.log(agenda)
    }

 return (
   <View style={styles.container}>
    <TouchableOpacity
    style={styles.button}
    onPress={del}>
        <Ionicons name="close-outline" size={20} color="#FFF" />
    </TouchableOpacity>  
    <TouchableOpacity
    style={styles.button}>
        <Ionicons name="create-outline" size={20} color="#FFF" />
    </TouchableOpacity>
    <Text style={styles.text}>{data.compromisso}</Text>
    <Text style={styles.text}>{data.data}</Text>
    <Text style={styles.text}>{data.hora}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 50,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#777',
        padding: 3,
        borderRadius: 3,
    },
    text: {
        color: '#FFF',
        fontSize: 25
    }
})