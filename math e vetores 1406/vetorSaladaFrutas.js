// 6) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas.

let salada = []
let addNew

while (addNew != 'cereja'){
    addNew = prompt('Digite o ingrediente que você deseja: ')
    salada.push(addNew)

}

console.log('Sua salada de frutas está pronta!')
console.log(salada)