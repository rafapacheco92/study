let nome = 'Rafael'
let idade = 30

console.log(nome.charAt(2))

nomeMinusculo = nome.toLowerCase()
console.log(nomeMinusculo)

idadeString = idade.toString()
console.log(idadeString)

let botao = document.querySelector('.btn') // para selecionar itens pela classe, igual getElementById para ID

botao.classList.add('classe') // adiciona uma classe ao elemento botão