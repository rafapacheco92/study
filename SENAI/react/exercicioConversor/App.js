import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

var width = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <Header txtUm={"Conversor de base"} txtDois={"RESET"} txtTres={'⋮'}/>
      <Body texto={"Eou sou o bore"}/>
      <Footer texto={"SHEIN"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Header(props) {
  return (
    <View style={{flex: 2, backgroundColor: 'blue', justifyContent: 'center', width: width, paddingTop: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>{props.txtUm}</Text>
        <View style={{gap:'10', flexDirection: 'row', marginTop: 7}}>  
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{props.txtDois}</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>{props.txtTres}</Text>
        </View>
      </View>
    </View>
  )
}
function Body(props) {
  return (
    <View style={{flex: 8, backgroundColor: '#333', alignItems: 'center', justifyContent: 'start', width: width, borderWidth: 1, paddingTop: 20}}>
      <View style={{borderWidth: 2, borderColor: 'blue', borderRadius: 6, overflow: 'hidden', flexDirection: 'row', height: 50, marginLeft: 40, marginRight: 40, marginBottom: 5, alignItems: 'center'}}>
        <View style={{width: 100, backgroundColor: 'blue', height: '100%', textAlign: 'center', justifyContent: 'center'}}>
        <Text style={{width: 100, backgroundColor: 'blue', fontSize: 20, color: 'white', textAlign: 'center', justifyContent: 'center'}}>BIN</Text>
        </View>
        <TextInput placeholder='BASE 2'
        placeholderTextColor="#1F1F1F"
        multiline={false}
        style={{borderWidth:1,
          borderColor:'#333', 
          height:100, 
          width:'80%',
          paddingTop: 0,
          paddingBottom: 28,
          verticalAlign: 'top',
          marginTop: 30,
          textAlign: 'center',
          color: '#FFF',
          fontSize: 20,
          textAlign: 'center'
        }}
      />
      </View>
      <View style={{borderWidth: 2, borderColor: 'blue', borderRadius: 6, overflow: 'hidden', flexDirection: 'row', height: 50, marginLeft: 40, marginRight: 40, marginBottom: 5, alignItems: 'center'}}>
        <View style={{width: 100, backgroundColor: 'blue', height: '100%', textAlign: 'center', justifyContent: 'center'}}>
        <Text style={{width: 100, backgroundColor: 'blue', fontSize: 20, color: 'white', textAlign: 'center', justifyContent: 'center'}}>OCT</Text>
        </View>
        <TextInput placeholder='BASE 8'
       placeholderTextColor="#1F1F1F"
       multiline={false}
       style={{borderWidth:1,
         borderColor:'#333', 
         height:100, 
         width:'80%',
         paddingTop: 0,
         paddingBottom: 28,
         verticalAlign: 'top',
         marginTop: 30,
         textAlign: 'center',
         color: '#FFF',
         fontSize: 20,
         textAlign: 'center'
        }}
      />
      </View>
      <View style={{borderWidth: 2, borderColor: 'blue', borderRadius: 6, overflow: 'hidden', flexDirection: 'row', height: 50, marginLeft: 40, marginRight: 40, marginBottom: 5, alignItems: 'center'}}>
        <View style={{width: 100, backgroundColor: 'blue', height: '100%', textAlign: 'center', justifyContent: 'center'}}>
        <Text style={{width: 100, backgroundColor: 'blue', fontSize: 20, color: 'white', textAlign: 'center', justifyContent: 'center'}}>DEC</Text>
        </View>
        <TextInput placeholder='BASE 10'
        placeholderTextColor="#1F1F1F"
        multiline={false}
        style={{borderWidth:1,
          borderColor:'#333', 
          height:100, 
          width:'80%',
          paddingTop: 0,
          paddingBottom: 28,
          verticalAlign: 'top',
          marginTop: 30,
          textAlign: 'center',
          color: '#FFF',
          fontSize: 20,
          textAlign: 'center'
        }}
      />
      </View>
      <View style={{borderWidth: 2, borderColor: 'blue', borderRadius: 6, overflow: 'hidden', flexDirection: 'row', height: 50, marginLeft: 40, marginRight: 40, alignItems: 'center'}}>
        <View style={{width: 100, backgroundColor: 'blue', height: '100%', textAlign: 'center', justifyContent: 'center'}}>
        <Text style={{width: 100, backgroundColor: 'blue', fontSize: 20, color: 'white', textAlign: 'center', justifyContent: 'center'}}>HEX</Text>
        </View>
        <TextInput placeholder='BASE 16'
        placeholderTextColor="#1F1F1F"
        multiline={false}
        style={{borderWidth:1,
          borderColor:'#333', 
          height:100, 
          width:'80%',
          paddingTop: 0,
          paddingBottom: 28,
          verticalAlign: 'top',
          marginTop: 30,
          textAlign: 'center',
          color: '#FFF',
          fontSize: 20,
          textAlign: 'center'
        }}
      />
      </View>
    </View>
  )
}
function Footer(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: 300}}>
      <View>
      <Text style={{fontSize: 20, fontWeight: 'bold' }}>{props.texto}</Text>

      </View>
    </View>
  )
}