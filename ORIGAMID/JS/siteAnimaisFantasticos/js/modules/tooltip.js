export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseLeave = {
    tooltipbox: '',
    handleEvent() {
      this.tooltipbox.remove();
    }
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(event) {
    const tooltipbox = createTooltipBox(this);
    tooltipbox.style.top = `${event.pageY}px`;
    tooltipbox.style.left = `${event.page}px`;

    onMouseLeave.tooltipbox = tooltipbox;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
