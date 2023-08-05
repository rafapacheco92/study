// let numberString = '9.60'
// let number = Number.parseFloat(numberString)
// let numberInt = Number.parseInt(numberString)
// console.log(number)
// console.log(numberInt)

// let valor = 48.49
// valor = valor.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})
// console.log(valor)

// console.log(Math.abs(-3.7)) // 3.7
// console.log(Math.max(1, 2, 3, 4, 15)) // 15
// console.log(Math.min(1, 2, 3, 4, 15)) // 1

// Retorne um número aleatório
// entre 1050 e 2000

// console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))


// Retorne o maior número da lista abaixo
// const numeros = '4, 5, 20, 8, 9';
// let numbersArray = numeros.split(', ')

// console.log(numbersArray)
// console.log(Math.max(...numbersArray))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let correctPrice = []
let count = 0

listaPrecos.forEach( (item) => {
  let cleanItem = +item.toUpperCase().replace('R$', '').trim().replace(',', '.')
  cleanItem = +cleanItem.toFixed(2)
  count += cleanItem
  correctPrice.push(cleanItem)
})

count = count.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})

console.log(count)
console.log(correctPrice)