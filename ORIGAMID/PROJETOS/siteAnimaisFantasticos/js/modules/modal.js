export default function initModal(){
  
  let btnOpen = document.querySelector('[data-modal="abrir"]')
  let btnClose = document.querySelector('[data-modal="fechar"]')
  let containerModal = document.querySelector('[data-modal="container"]')
  
  
  if (btnOpen && btnClose && containerModal){
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo')
  
  }
  
  function clickOutside(event) {
    if(event.target === this){
      toggleModal(event)
  }
  }
  
  btnOpen.addEventListener('click', toggleModal)
  btnClose.addEventListener('click', toggleModal)
  containerModal.addEventListener('click', clickOutside)
  }
  
}
