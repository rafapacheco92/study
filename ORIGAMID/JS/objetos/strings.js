let fruta = 'Banana'
let listaFrutas = 'Melancia, Banana, Laranja'
let priceList = ['R$ 99', 'R$ 199', 'R$ 12000'];

// console.log(listaFrutas.includes(fruta)) //true
// console.log(listaFrutas.includes(fruta, 15)) //false
// console.log(listaFrutas.startsWith('Mel')) //true
// console.log(listaFrutas.startsWith('Banana')) //false
// console.log(listaFrutas.endsWith('Banana')) //false
// console.log(listaFrutas.endsWith('Laranja')) //true
// console.log(fruta.slice(0, 2)) //Ba
// console.log(fruta.slice(4)) //na
// console.log(fruta.slice(0, -2)) //Bana
// console.log(fruta.slice(-3)) //ana
// console.log(fruta.indexOf('n')) // 2
// console.log(fruta.indexOf('ana')) // 1
// console.log(fruta.lastIndexOf('n')) // 4
// console.log(fruta.padStart(10, 'DR')) // DRDRBanana
// console.log(fruta.padEnd(12, 'DRE')) // BananaDREDRE
// priceList.forEach((item) => console.log(item.padStart(9, '-')))
// console.log(fruta.repeat(5)) // BananaBananaBananaBananaBanana
// console.log(listaFrutas.replace(',', '.')) // troca só o primeiro item
// console.log(listaFrutas.replaceAll(',', '.')) // troca todos
// let listaFrutasArray = listaFrutas.split(', ')
// console.log(listaFrutasArray) // retorna uma array ['Melancia', 'Banana', 'Laranja']
// console.log(listaFrutasArray.join(', ')) // faz o inverso do split
// let htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// let htmlArray = htmlText.split('div');
// let htmlNovo = htmlArray.join('section');
// console.log(htmlText)
// console.log(htmlArray)
// console.log(htmlNovo)
// const valor = '  R$ 23.00   ' 
// valor.trim(); // 'R$ 23.00'
// valor.trimStart(); // 'R$ 23.00   '
// valor.trimEnd(); // '  R$ 23.00'

// Exercicios

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: 'Taxa do Pão',
//     valor: 'R$ 39',
//   },
//   {
//     descricao: 'Taxa do Mercado',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 99',
//   },
//   {
//     descricao: 'Taxa do Banco',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 49',
//   },
// ];

// let totalTaxes = 0
// let totalIncoming = 0

// transacoes.forEach((item) => {
//   let cleanValue = +item.valor.replace('R$ ', '')
//   if (item.descricao.startsWith('Taxa')){
//     totalTaxes += cleanValue
//   } else {
//     totalIncoming += cleanValue
//   }
// })

// console.log(totalTaxes, totalIncoming)



// Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
// transpArray = transportes.split(';')
// console.log(transpArray)

// Substitua todos os span's por a's
// const html = `<ul>
// <li><span>Sobre</span></li>
// <li><span>Produtos</span></li>
// <li><span>Contato</span></li>
// </ul>`;

// let htmlArray = html.split('span').join('a')
// console.log(htmlArray)


// Retorne o último caracter da frase
// const frase = 'Melhor do ano!';
// console.log(frase.slice(frase.length - 1))

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let count = 0;

transacoes.forEach((item) => {
  itemUpper = item.toUpperCase().trim();
  if (itemUpper.includes('TAXA')){
    count++;
  }
})

console.log(count)
