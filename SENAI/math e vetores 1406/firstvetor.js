let numeros = [4, 7, 9, 22, 5, 14, 2]
let idades = []
let nomes = ['Rafael', 'Rodrigo', 'Joao', 'Saulo']
let palavras = []

let idadeAdd

// Método push

    quantidadeIdades = Number(prompt('Quantas idades?'))

    for(i = 0; i < quantidadeIdades; i++){

    idadeAdd = Number(prompt('Digite a idade à ser adicionada'))
    idades.push(idadeAdd)
}

idades.pop()

alert(idades)
// idades.push(14)
    // alert(idades)
    // idades.push(29)
    // alert(idades)