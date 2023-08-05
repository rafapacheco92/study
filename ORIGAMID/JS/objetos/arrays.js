//  let obj = {
//   0: 'Rafael',
//   1: 'Pacheco',
//   2: 'Soares',
//   length: 3
//  }

//  let array = Array.from(obj);

//  console.log(array);

//  console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3));
// ['Item1', 'Item2', 'Item1', 'Item2']

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

// let array = ['Item1', 'Item2', 'Item3', 'Item4']

// console.log(array.fill('rafael')) // ['rafael', 'rafael', 'rafael', 'rafael']
// console.log(array.includes('Item1')); 

// Exercises ----------------------------------------------------------------

// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

// let pizza = comidas.shift()
// console.log(pizza)
// let macarrao = comidas.pop()
// console.log(macarrao)
// comidas.push('Arroz')
// comidas.unshift('Peixe', 'Batata')
// console.log(comidas)

// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

// estudantes.sort()
// estudantes.reverse()
// console.log(estudantes.includes('Joana'))
// console.log(estudantes.includes('Juliana'))
// console.log(estudantes)

// let html = `<section>
//               <div>Sobre</div>
//               <div>Produtos</div>
//               <div>Contato</div>
//             </section>`
// Substitua section por ul e div com li,
// utilizando split e join

// html = html.split('section').join('ul').split('div').join('li')

// console.log(html)

// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

// let carrosClone = carros.slice()
// carros.pop()
// console.log(carrosClone)
// console.log(carros)

// Iterações --------------------------------

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// let numbersX2 = numbers.map(number => number * 2)
// console.log(numbersX2)

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15 
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas)