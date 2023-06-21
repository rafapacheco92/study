// 2) Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20. Mostre o vetor na tela. (DESAFIO: O vetor não pode conter números repetidos).

let vetor = []

for (i = 0; i < 10; i++){
    let newItem = Math.floor(Math.random() * (21 - 0) + 0)
    vetor.push(newItem)
}

console.log(vetor)