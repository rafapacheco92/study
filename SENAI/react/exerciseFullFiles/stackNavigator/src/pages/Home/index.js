import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation();

 return (
   <View style={styles.container}>
    <Text>HOME</Text>
    <TouchableOpacity onPress={ () => navigation.navigate('Sobre')}>
        <Text style={styles.button}>SOBRE</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#333',
        width: 100,
        color: '#FFF'
    }
});