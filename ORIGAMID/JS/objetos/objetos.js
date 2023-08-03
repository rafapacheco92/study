let fruta = 'Banana'
let listaFrutas = 'Melancia, Banana, Laranja'
let priceList = ['R$ 99', 'R$ 199', 'R$ 12000'];

console.log(listaFrutas.includes(fruta)) //true
console.log(listaFrutas.includes(fruta, 15)) //false
console.log(listaFrutas.startsWith('Mel')) //true
console.log(listaFrutas.startsWith('Banana')) //false
console.log(listaFrutas.endsWith('Banana')) //false
console.log(listaFrutas.endsWith('Laranja')) //true
console.log(fruta.slice(0, 2)) //Ba
console.log(fruta.slice(4)) //na
console.log(fruta.slice(0, -2)) //Bana
console.log(fruta.slice(-3)) //ana
console.log(fruta.indexOf('n')) // 2
console.log(fruta.indexOf('ana')) // 1
console.log(fruta.lastIndexOf('n')) // 4
console.log(fruta.padStart(10, 'DR')) // DRDRBanana
console.log(fruta.padEnd(12, 'DRE')) // BananaDREDRE
priceList.forEach((item) => console.log(item.padStart(9, '-')))