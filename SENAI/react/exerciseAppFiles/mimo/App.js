import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from 'react';


let postagens = [
  {imagem: 'youtube', texto: 'Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj'},
  {imagem: 'arrow-up-right', texto: 'Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador'},
  {imagem: 'cloud-off', texto:'Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife'},
  {imagem: 'database', texto:'Na estrada da programação, cada erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev'},
  {imagem: 'codesandbox', texto:'Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo'},
  {imagem: 'coffee', texto:'Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo'},
  {imagem: 'codepen', texto:'Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante'},
  {imagem: 'alert-triangle', texto:'No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo'},
  {imagem: 'activity', texto:'Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech'},
  {imagem: 'award', texto:'A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev'},
  {imagem: 'aperture', texto:'Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador'},
]



export default function App() {
  
  let [feedContent, setFeedContent] = useState(<Feed />);
  
  function feed() {
    setFeedContent(<Feed />)
  }
  function perfil() {
    setFeedContent(<Perfil preferencias={"Carro"} imagem={'user'} texto={'Eu sou o Bob Marte'}/>)
  }
  function newPost() {
    setFeedContent(<NewPost />)
  }
  function postagem(){
    const newPostObj = {
      imagem: {inputImg}, texto: {inputText}
    }
    postagens.unshift(newPostObj)
    setFeedContent(<Feed />)
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
        <TouchableOpacity onPress={newPost}>
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
      {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto}/> */}
      {postagens.map( (post, index) => (
          <Post imagem={post.imagem} texto={post.texto} key={index}/>
        ) )}
    </View>
  )
}

function Perfil(props) {
  return (
    <View style={{alignItems: 'center'}}>
      <Feather
      name={props.imagem}
      size={160}
      color='#FFF' />
      <Text style={{color: '#FFF', fontWeight: 'bold'}}>{props.texto}</Text>
      <Text style={{color: '#FFF', fontWeight: 'bold', marginTop: 30,}}>{props.preferencias}</Text>

      <TextInput 
        multiline={true}
        style={{borderWidth:1,
          borderColor:'#333', 
          height:100, 
          width:'80%',
          paddingTop: 0,
          paddingBottom: 0,
          verticalAlign: 'top',
          marginTop: 30,
        }}
      />
    </View>
  )
}

function Post(props) {
  return (
    <View style={{alignItems: 'center', padding: 30}}>
      <Feather
      name={props.imagem}
      size={160}
      color='#FFF' />
      <Text style={{color: '#FFF', fontWeight: 'bold'}}>{props.texto}</Text>
    </View>
  )
}

function NewPost() {
  const [inputImg, setInputImg] = useState()
  const [inputText, setInputText] = useState()

  

  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
    <Text style={{ alignItems: 'center', fontSize: 50 }}>Novo Post</Text>
    <Text style={{fontSize:40}}>Imagem</Text>
    <TextInput style={{borderColor: 'white', color:'white', borderWidth: 3,width: 200, height: 50, borderRadius: 20, padding: 15, marginTop: 10, marginBottom: 10,}} value={inputImg} onChangeText={setInputImg}
    />
    <Text style={{fontSize:40}}>Texto</Text>
    <TextInput
    style={{borderColor: 'white', color:'white', borderWidth: 3,width: 200, height: 50, borderRadius: 20, padding: 15, marginBottom: 10, marginTop: 10,}} value={inputText} onChangeText={setInputText}
    />
    <TouchableOpacity>
    <Text
    style={{fontSize: 19, overflow: 'hidden', fontWeight: 'bold', color: 'white', backgroundColor: '#333', borderWidth: 2, borderRadius: 20,padding: 10, marginTop: 10, marginBottom: 10, borderColor: '#FFF'}}>
      POSTAR
    </Text>
    </TouchableOpacity>
    </View>
    );
}