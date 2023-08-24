// let frutas = ['Banana', 'Morango', 'Uva'];
// let frase = 'This is JavaScript';

// for(let fruta of frutas) {
//   console.log(fruta);
// }

// for(let char of frase) {
//   console.log(char);
// }

// let btns = document.querySelectorAll('button')



// for(let btn of btns) {
//   btn.style.background = '#333'
// }

// let carro = {
//   marca: 'volvo',
//   modelo: 'v40',
//   ano: 2014
// }

// for (let key in carro) {
//   console.log(key, carro[key])
// }

// for of -> Mostra os valores
// for in -> Mostra as chaves

// let btnSingle = document.querySelector('button');
// let btnStyles = getComputedStyle(btnSingle)

// for(let style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`);
// }

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

let lis = document.querySelectorAll('li');

for (let li of lis) {
  li.classList.add('ativo')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (let prop in window){
  console.log(`${prop}: ${window[prop]}`)
}
