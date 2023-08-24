// Remova o erro
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');
// priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

// (() => {
//   let car = 'volvo'
//   console.log(car)
// })()

// Como podemos utilizar
// a função abaixo.
// const active = callback => callback();

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
console.log(btnStyles.backgroundColor)

let {backgroundColor, color, margin} = btnStyles


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
