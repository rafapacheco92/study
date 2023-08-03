// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Pessoa.prototype.andar = function(){
//   return this.nome + ' andou'
// }

// let rafael = new Pessoa('Rafael', 30)

// console.log(Pessoa.prototype)
// console.log(rafael.prototype)

// let carro = {
//   marca: 'Honda',
//   preco: 2000,
//   andar() {
//     return true;
//   }
// }

// ----- Exercicio --------------------------------

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// function Pessoa(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// Pessoa.prototype.nomeCompleto = function() {
//   return `${this.name} ${this.surname}`;
// }

// let rafael = new Pessoa('Rafael', 'Pacheco', 30)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Object.getOwnPropertyNames(NodeList.prototype)
// Object.getOwnPropertyNames(HTMLCollection.prototype)
// Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// li; HTMLLiElement
// li.click; function
// li.innerText; string
// li.value; number
// li.hidden; boolean
// li.offsetLeft; number
// li.click(); function

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
// string