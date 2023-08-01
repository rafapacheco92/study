let gridSectionNode = document.querySelectorAll('.gridSection')
let gridSectionHTML = document.getElementsByClassName('gridSection')

let arrayGrid = Array.from(gridSectionHTML) // transforma itens selecionados em um array

//retorne as imagens do site no console

let imagensSite = document.querySelectorAll('img')
console.log(imagensSite)

imagensSite.forEach(function(item){
  console.log(item)
})

//selecionar todas imagens o nome começa com "imagem"

let imageImg = document.querySelectorAll('img[src^="/img/imagem"]')
console.log(imageImg)

//selecione todos links internos (href iniciando com #)

linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// selecione o primeiro h2 centro de .animais-descricao

firstHdois = document.querySelector(".animais-descricao h2")
console.log(firstHdois)

//selecione o ultimo p do site

let paragrafos = document.querySelectorAll('p')
let ultimoP = paragrafos[--paragrafos.length]
console.log(ultimoP)