// async function puxarDados(){
//   let promiseDados = fetch('./dados.json')
//   let promiseClientes = fetch('./clientes.json')

//   let jsonClientes = await (await promiseClientes).json()
//   let jsonDados = await (await promiseDados).json()
//   console.log(jsonDados)
//   console.log(jsonClientes)
//   document.body.innerText = jsonDados.aula + ' ' + jsonClientes.cliente
// }

// puxarDados()

// window.history.pushState(null, null, 'sobre.html')

// window.addEventListener('popstate', () => {
//   console.log('teste')
// })

let links = document.querySelectorAll('a')

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href)
  window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
  let pageResponse = await fetch(url)
  let pageText = await pageResponse.text()
  
  replaceContent(pageText)
}

function replaceContent(newText) {
  let newHtml = document.createElement('div')
  newHtml.innerHTML = newText
  
  let oldContent = document.querySelector('.content')
  let newContent = newHtml.querySelector('.content')
  
  oldContent.innerHTML = newContent.innerHTML
  document.title = newHtml.querySelector('title').innerText

  console.log(newHtml)
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href)})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})