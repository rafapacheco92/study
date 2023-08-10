export default function initTooltip() {

}

let tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event){
  let tooltipbox = createTooltipBox(this)
  tooltipbox.style.top = event.pageY + 'px'
  tooltipbox.style.left = event.pageX + 'px'

  onMouseLeave.tooltipbox = tooltipbox
  this.addEventListener('mouseleave', onMouseLeave)
}

let onMouseLeave = {
  tooltipbox: '',
  handleEvent(){
    this.tooltipbox.remove()
}
}

function createTooltipBox(element) {
  let tooltipBox = document.createElement('div');
  let text = element.getAttribute('aria-label')
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox)
  console.log(tooltipBox)
  return tooltipBox;
}

