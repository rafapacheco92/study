export default function showNHide() {
  const pergunta = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeText() {
    this.nextElementSibling.classList.toggle('ativo');
    this.classList.toggle('ativo');
  }

  pergunta.forEach((item) => {
    item.addEventListener('click', activeText);
  });
}
