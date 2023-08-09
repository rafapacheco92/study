export default function scrollSuavinho(){
  let linksInt = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
  
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
