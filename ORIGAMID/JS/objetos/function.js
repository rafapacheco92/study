// function hello(name) {
//   console.log(`hello ${name} ${this.year} ${this.birth}`);
// }

// hello.call(null, 'Rafael')

// hello.call({year: 30, birth: 1992}, 'Rafael') // Objeto novo + parâmetros

// let carros = ['Ford', 'Fiat', 'VW']

// function Dom(seletor){
//   this.element = document.querySelector(seletor)
// }

// let h1 = new Dom('h1')
// let p = new Dom('p')
// console.log(h1)

// Dom.prototype.ativo = function(classe){
//   console.log(this)
//   this.element.classList.add(classe)
// }

// h1.ativo('ativado')

// Dom.prototype.ativo.call(p, 'rafael')

// let frutas = ['Maçã', 'Uva', 'Pera']

// Array.prototype.mostrarThis = function(){
//   console.log(this)
// }

// Exercicios ------------------------------------------------------

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

// let p = document.querySelectorAll('p')

// let caracteres = Array.prototype.reduce.call(p, (acc, item) => {
//   return acc + item.innerHTML.length
// }, 0)

// console.log(caracteres)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento (tag, classe, conteudo){
  let elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento('p', 'class', 'Rafael'));



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

let textoH1 = criarElemento.bind(null, 'h1', 'titulo')

console.log(textoH1('sldkajsdlkaj'))