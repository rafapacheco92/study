import outsideClick from './outsideClick.js';

export default function initDropDown() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchsatart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  dropDownMenus.forEach((menu) => {
    ['touchsatart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
