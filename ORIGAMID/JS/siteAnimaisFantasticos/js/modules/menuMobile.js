import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventList = ['click', 'touchstart'];
  function openMenu() {
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    outsideClick(menuList, eventList, () => {
      menuList.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  }
  eventList.forEach((event) => menuBtn.addEventListener(event, openMenu));
}
