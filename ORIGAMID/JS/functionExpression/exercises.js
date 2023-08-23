// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  let car = 'volvo'
  console.log(car)
})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
