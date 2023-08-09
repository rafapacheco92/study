export default function initAnimaScroll() {
  let sections = document.querySelectorAll('[data-anime="scroll"]')
  if(sections.length) {
  let halfWindow = window.innerHeight * .6
  
  function animaScroll(){
    sections.forEach((section) => {
      let sectionTop = section.getBoundingClientRect().top
      let isSectionVisible = (sectionTop - halfWindow) < 0;
      if (isSectionVisible)
        section.classList.add('ativo')
       else 
        section.classList.remove('ativo')
    })
  }
  
  
  animaScroll()
  
  window.addEventListener('scroll', animaScroll)
  }
  }