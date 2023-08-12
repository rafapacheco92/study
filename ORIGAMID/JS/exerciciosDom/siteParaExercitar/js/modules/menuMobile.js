import outsideClick from './outsideClick.js';
export default function initMenuMobile () {
  
  let menuBtn = document.querySelector('[data-menu="button"]');
  let menuList = document.querySelector('[data-menu="list"]');
  let eventList = ['click', 'touchstart']
  
  if(menuBtn) {
  function openMenu() {
  
    menuList.classList.toggle('active')
    menuBtn.classList.toggle('active')
    outsideClick(menuList, eventList, () => {
    menuList.classList.remove('active');
    menuBtn.classList.remove('active');
  })
  }
  }
  eventList.forEach((event) => menuBtn.addEventListener(event, openMenu))

  
}
