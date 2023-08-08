// let carro = {
//   rodas: 4,
//   brand(name) {
//     this.marca = name
//     return this
//   },
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// let honda = Object.create(carro).brand('Honda');

// console.log(honda)

// let carFunction = {
//   acelerar() {
//     return 'acelerou'},
//   buzinar() {
//   return 'buzinou'}
// }

// let moto = {
//   rodas: 2,
//   capacete: true
// }

// Object.assign(moto, carFunction)
// console.log(moto)

// let moto = {}

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false,
//   }
// })

// moto.rodas = 10

// console.log(moto)