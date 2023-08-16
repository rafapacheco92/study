let controles = document.getElementById('controles')
let cssT = document.querySelector('.css')
let btn = document.querySelector('.btn')

controles.addEventListener('change', handleChange)

let handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  color(value) {
    this.element.style.color = value
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem'
  },
  texto(value) {
    this.element.innerText = value;
  }

}

function handleChange(event) {
  let name = event.target.name
  let value = event.target.value

  handleStyle[name](value)
  showCss()
  saveValues()
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  let properties = object.keys(localStorage);
  properties.forEach(property => {
    handleStyle[property](localStorage[property])
    console.log(controles.elements[property])
    controles.elements[property].value = localStorage[property]
  })
  showCss()
}

setValues()

function showCss () {
  cssT.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}