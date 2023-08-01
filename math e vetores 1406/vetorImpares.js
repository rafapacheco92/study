// 4) Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.

let vetor = []
let addNew
let somaImpares = 0

for(i = 0; i < 5; i++){
    addNew = Number(prompt(`Digite o ${i+1} número:`))

    if(addNew % 2 != 0){
        vetor.push(addNew)
        somaImpares += addNew
    }
}

alert(`Números impares: ${vetor}\nSoma dos impares: ${somaImpares}`)