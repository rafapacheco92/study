function initTab(){
let tabMenu = document.querySelectorAll('.jsTabMenu li')
let tabContent = document.querySelectorAll('.jsTabContent section')
tabContent[0].classList.add('ativo')

function activeTab(index){
  tabContent.forEach((item) => {
    item.classList.remove('ativo')
  })
  let direction = tabContent[index].dataset.anime
  tabContent[index].classList.add('ativo', direction)
}

tabMenu.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeTab(index)
  })
})
}

initTab()


function showNHide(){
let pergunta = document.querySelectorAll('.jsFaq dt')

function activeText() {
  this.nextElementSibling.classList.toggle('ativo')
  this.classList.toggle('ativo')
}

pergunta.forEach((item, index) => {
  item.addEventListener('click', activeText)
})
}

showNHide()

function scrollSuavinho(){
let linksInt = document.querySelectorAll('.jsMenu a[href^="#"]')

function SmoothScroll(event) {
  event.preventDefault()
  const href = this.getAttribute('href')
  const section = document.querySelector(href)

  section.scrollIntoView({
    behavior:'smooth',
    block: 'start',
  })
  
  // Forma alternativa
  // const yLink = section.offsetTop
  // window.scrollTo({
  //   top: yLink,
  //   behavior:'smooth'
  // })
}

linksInt.forEach((link) => {
  link.addEventListener('click', SmoothScroll)
})
}

scrollSuavinho()

let sections = document.querySelectorAll('.jsScroll')
let halfWindow = window.innerHeight * .6

function animaScroll(){
  sections.forEach((section) => {
    let sectionTop = (section.getBoundingClientRect().top - halfWindow) < 0
    if (sectionTop){
      section.classList.add('ativo')
    } else {
      section.classList.remove('ativo')
    }
  })
}

animaScroll()

window.addEventListener('scroll', animaScroll)