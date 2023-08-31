export default function initTab() {
  let tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  let tabContent = document.querySelectorAll('[data-tab="content"] section')
  tabContent[0].classList.add('ativo')

  function activeTab(index) {
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
