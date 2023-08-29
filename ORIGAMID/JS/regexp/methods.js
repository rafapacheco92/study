// let frase = 'JavaScript, TypeScript, CoffeeScript, Java'
// let regexpM = /\w+/g
// let regexpM = /[\,\s]+/g
// // let results = frase.match(regexpM)
// let results = frase.split(regexpM)
// console.log(results)

// let tags = `
// <ul>
//   <li>Item1</li>
//   <li>Item2</li>
//   <li>Item3</li>
// </ul>`;

// let regexpM = /ul/g
// let regexpM = /<li/g
// let regexpM = /(?<=<\/?)\w+/g
// let result = tags.replace(regexpM, '$& class="ativo"')

// console.log(result)

let emails = `
empresa@hoail.com
contato@gmaidla.com
suporte@gtmail.com
`;

let regexp = /(\w+@)([\w]+)/g

// let result = emails.replace(regexpM, '$1hotmail.com')

let result = emails.replace(regexp, function(...args) {
  return args[1] + 'gmail'
})


console.log(result)

