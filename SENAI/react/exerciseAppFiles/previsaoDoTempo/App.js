import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const img = require('./img/clouds.jpg')
var width = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
      <Header />
      <Body />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005599 ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

function Header() {
  return (
    <View style={{flex: 2, justifyContent: 'center', width: width, paddingTop: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
        <Text style={{color: '#FFF', fontWeight: 'thin', fontSize: 40}}>+</Text>
        <View>
          <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Capivari</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10, textAlign: 'center'}}>
            <Feather
              name='navigation'
              size={15}
              color='#FFF' />
            <Feather
              name='circle'
              size={10}
              color='#FFF' />
          </View>
        </View>
        <Text style={{color: '#FFF', fontWeight: 'thin', fontSize: 40}}>⁝</Text>
      </View>
    </View>
  )
}
function Body() {
  return (
    <View style={{flex: 8, alignItems: 'center', justifyContent: 'start', width: width, paddingTop: 20}}>

      <View style={{marginBottom: 50, alignItems: 'center'}}>
        <Text style={{color: '#FFF', fontSize: 100, textAlign: 'center'}}>17 ºC</Text>
        <Text style={{color: '#FFF', fontSize: 20, marginTop: 10}}>Nublado 22º/16º</Text>
        <View style={{marginTop: 20, flexDirection: 'row', gap: '10', backgroundColor: 'rgba(255, 255, 255, 0.5)', paddingTop: 4, paddingBottom: 4, paddingRight: 8, paddingLeft: 8, borderRadius: 115}}>
          <Entypo name="leaf" size={15} color="#FFF" />
          <Text style={{fontSize: 16, color:'#FFF', fontWeight: 'bold'}}>IQA 28</Text>
        </View>
      </View>

      <View style={{backgroundColor: "rgba(0,0,0,0.3)", paddingTop: 30, paddingBottom: 30, paddingLeft: 20, paddingRight: 20, borderRadius: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="calendar" size={22} color="rgba(255,255,255,0.6)" />
          <Text style={{marginLeft: 15, color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: 20}}>Previsão para 5 dias</Text>
          <Text style={{marginLeft: 50, color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: 15}}>Mais detalhes ▶</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="partly-sunny-outline" size={24} color="rgba(255,255,255,0.6)" />
            <Text style={{marginLeft: 15, color: '#FFF', fontWeight: 500, fontSize: 20}}>Hoje    Nublado</Text>
          </View>
          <Text style={{marginLeft: 15, color: '#FFF', fontWeight: 500, fontSize: 20}}>
            22º / 16º
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25, justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="partly-sunny-outline" size={24} color="rgba(255,255,255,0.6)" />
            <Text style={{marginLeft: 15, color: '#FFF', fontWeight: 500, fontSize: 20}}>Amanhã    Nublado</Text>
          </View>
          <Text style={{marginLeft: 15, color: '#FFF', fontWeight: 500, fontSize: 20}}>
            23º / 17º
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25,         justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="rainy-outline" size={24} color="rgba(255,255,255,0.6)" />
            <Text style={{marginLeft: 15, color: '#FFF', fontWeight: 500, fontSize: 20}}>Sábado    Chuva</Text>
          </View>
          <Text style={{marginLeft: 15, color: '#FFF', fontWeight: 500, fontSize: 20}}>
            21º / 19º
          </Text>
        </View>
        <View style={{marginTop: 50, backgroundColor: 'rgba(255, 255, 255, 0.5)', paddingTop: 15, paddingBottom: 15, borderRadius: 50}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 20, fontWeight: 'bold', }}>Previsão para 5 dias
          </Text>
        </View>
      </View>
    </View>
  )
}