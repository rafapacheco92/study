export default function showNHide(){
  let pergunta = document.querySelectorAll('[data-anime="accordion"] dt')
  
  function activeText() {
    this.nextElementSibling.classList.toggle('ativo')
    this.classList.toggle('ativo')
  }
  
  pergunta.forEach((item, index) => {
    item.addEventListener('click', activeText)
  })
  }