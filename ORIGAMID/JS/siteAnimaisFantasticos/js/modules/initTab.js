export default function initTab() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove('ativo');
    });
    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direction);
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
