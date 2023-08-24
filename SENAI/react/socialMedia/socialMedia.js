import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from 'react';

export default function App() {
  
  let [feedContent, setFeedContent] = useState();
  
  function feed() {
    setFeedContent(<Feed />)
  }
  function perfil() {
    setFeedContent(<Perfil />)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={feed}>
        <FontAwesome 
          name='home'
          size={45}
          color='#333'
        /></TouchableOpacity>
        <TouchableOpacity onPress={perfil}>
      <FontAwesome 
          name='user'
          size={45}
          color='#333'
        />
        </TouchableOpacity>
        <TouchableOpacity>
      <FontAwesome 
          name='check'
          size={45}
          color='#333'
        />
        </TouchableOpacity>
      </View>
      <View style={styles.feed}>
        <ScrollView>
            {feedContent}
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#bf00ff',
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  feed: {
    flex: 6,
    width: '100%',
    backgroundColor: '#8a08bb',
  },
  footer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#bf77ff'
  },
});

function Feed() {
  return (
    <View>
      <Post />
      <Post />
      <Post />
      <Post />
    </View>
  )
}

function Perfil() {
  return (
    <View style={{alignItems: 'center', padding: 30}}>
      <FontAwesome
      name='user'
      size={160}
      color='#FFF' />
      <Text style={{color: '#FFF', fontWeight: 'bold'}}>Olá me chamo Apopéia</Text>
    </View>
  )
}

function Post() {
  return (
    <View style={{alignItems: 'center', padding: 30}}>
      <FontAwesome
      name='motorcycle'
      size={160}
      color='#FFF' />
      <Text style={{color: '#FFF', fontWeight: 'bold'}}>TEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTOTEXTO</Text>
    </View>
  )
}