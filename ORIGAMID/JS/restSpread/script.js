// function anunciarGanhadores(premio, ...ganhadores) {
//   console.log(...ganhadores)
//   ganhadores.forEach(ganhador => {
//     console.log(ganhador + ' ganhou um ' + premio)
//   });
// }

// let winners = ['Rafael', 'Soares', 'Pacheco']

// anunciarGanhadores('Carro', ...winners);


// let frutas = ['banana', 'uva', 'morango']
// let legumes = ['cenoura', 'tomate']
// let comidas = [...frutas, ...legumes, 'pizza', 'macarrao']

// console.log(comidas)

// let numeros = [1,2,3,4,5,6,6,7,8,9]
// let maiorNumero = Math.max(...numeros)
// console.log(maiorNumero)

// let btns = document.querySelectorAll('button')
// let arrayBtns = [...btns]
// console.log(btns)
// console.log(arrayBtns)

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
   const buttonElement = document.createElement('button');
  buttonElement.textContent = 'botao'
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  buttonElement.style.width = '80px';
  buttonElement.style.height = '22px';
  return buttonElement;
} 

const redButton = createButton();
document.body.appendChild(redButton)

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)
console.log(comidas)