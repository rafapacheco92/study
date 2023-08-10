import outsideClick from './outsideClick.js';
export default function initDropDown () {
  
  let dropDownMenus = document.querySelectorAll('[data-dropdown]');
  
  dropDownMenus.forEach(menu => {
    ['touchsatart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active')
    outsideClick(this, ['touchsatart', 'click'], () => {
      this.classList.remove('active')
    })
  }
}


