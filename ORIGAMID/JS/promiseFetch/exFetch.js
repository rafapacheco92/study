// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// let cepInp = document.getElementById('cep')
let btn = document.getElementById('btn')
let result = document.getElementById('resultado')

// btn.addEventListener('click', handleClick)

// function handleClick(event) {
//   event.preventDefault()
//   let CEP = cepInp.value
//   pesquisa(CEP)
// }

// function pesquisa(CEP) {
//   fetch(`https://viacep.com.br/ws/${CEP}/json/`)
  
//   .then(response => response.text())
//   .then(body => {
//     result = result.innerText = body
//   })
// }


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

// function fetchBtc(){
//   fetch('https://blockchain.info/ticker')
//   .then(response => response.json())
//   .then(btcJSON => result.innerText = `R$${btcJSON.BRL.last}`)
// }

// setInterval(fetchBtc(), 1000 * 30)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

function setNorris(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(joke => result.innerText = joke.value)
}

btn.addEventListener('click', handleClick)

function handleClick(event) {
  event.preventDefault()
  setNorris()
}