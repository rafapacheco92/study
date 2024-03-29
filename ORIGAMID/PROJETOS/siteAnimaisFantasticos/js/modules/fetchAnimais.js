import initAnimaNumbers from "./animaNumbers.js"
export default function initFetchAnimais (){

  async function fetchAnimais(url) {
    try {
    let animaisResponse = await fetch(url)
    let animaisJSON = await animaisResponse.json()
  
    animaisJSON.forEach(animal => {
      let divAnimal = createAnimal(animal)
      let numerosGrid = document.querySelector('.numeros-grid')
      numerosGrid.appendChild(divAnimal)
    })
    initAnimaNumbers()
  } catch(erro) {
    console.log(erro)
  }
}
  
  function createAnimal(animal) {
    let div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  
  fetchAnimais('./animaisApi.json')
}
