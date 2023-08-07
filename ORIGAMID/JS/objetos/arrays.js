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

// let aulas = [10, 25, 30];
// let total1 = aulas.reduce((acumulador, atual) => {
// return acumulador + atual;
// });
// total1; // 65
// const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
// total2; // 165


// let frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// let hasGrape = frutas.some( fruta => fruta === 'Uva')
// console.log(hasGrape) // true

// let every = frutas.every(fruta => fruta === 'Uva')
// console.log(every) // false

// let numeros = [6, 43, 22, 88, 101, 29];

// let maiorTres = numeros.every(numero => numero > 3)
// console.log(maiorTres)


// let uvaI = frutas.findIndex(fruta => fruta === 'Uva')
// console.log(uvaI)
// let bigger = numeros.find(num => num > 42)
// console.log(bigger) // 43

// let aulas2 = [
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

// const aulasMaiores = aulas2.filter((aula) => { 
//   return aula.min > 15;
// });

// exercicios ----------------------------------------------------------------

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

// let classesHtml = document.querySelectorAll('.curso')
// let arrayClasses = Array.from(classesHtml)

// let objClasses = arrayClasses.map(classes => {
//   let title = classes.querySelector('h1').innerText
//   let desc = classes.querySelector('p').innerText
//   let classesI = classes.querySelector('.aulas').innerText
//   let hours = classes.querySelector('.horas').innerText
//   return {
//     title,
//     desc,
//     classesI,
//     hours,
//   }})

// console.log(objClasses)


// Retorne uma lista com os
// números maiores que 100
// const numeros = [3, 44, 333, 23, 122, 322, 33];

// let maior100 = numeros.filter((numero) => numero > 100)

// console.log(maior100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
// const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

// let temBaixo = instrumentos.some((i) => {
//   return i === 'Baixo'
// })

// console.log(temBaixo)

// Retorne o valor total das compras
// const compras = [
//   {
//     item: 'Banana',
//     preco: 'R$ 4,99'
//   },
//   {
//     item: 'Ovo',
//     preco: 'R$ 2,99'
//   },
//   {
//     item: 'Carne',
//     preco: 'R$ 25,49'
//   },
//   {
//     item: 'Refrigerante',
//     preco: 'R$ 5,35'
//   },
//   {
//     item: 'Quejo',
//     preco: 'R$ 10,60'
//   }
// ]

// let comprasValor = compras.reduce((acc, item) => {
//   let precoLimpo = +item.preco.replace(',', '.').replace('R$ ', '')
//   return acc + precoLimpo
// }, 0)

// console.log(comprasValor)