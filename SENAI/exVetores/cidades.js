// 8) Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem, utilizando trem. De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. De Praga até Viena são mais 292km. De Viena até Budapeste, são outros 242km. Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

// Bruxelas <-> Berlim = 764km
// Berlim <-> Praga = 350km
// Praga <-> Viena = 292km
// Viena <-> Budapeste = 242km

let cidades = ['bruxelas', 'berlim', 'praga', 'viena', 'budapeste']
let distancias = [0, 764, 350, 292, 242]
let cidadePartida
let cidadeDestino
let totalDistancia = 0

cidadePartida = prompt('Digite a cidade que você vai partir:')
cidadeDestino = prompt('Digite a cidade que você quer chegar:')

let posPartida = cidades.indexOf(cidadePartida)
let posDestino = cidades.indexOf(cidadeDestino)

if (posPartida < posDestino){
    for (i = posPartida; i <= posDestino; i++){
        totalDistancia += distancias[i]
    }
} else if (posPartida > posDestino){
    for (i = posPartida; i >= posDestino; i--){
        totalDistancia += distancias[i]
}
}else{
    alert('Desse jeito você não vai à lugar algum!')
}

alert(`O total percorrido será de ${totalDistancia}`)