let div = document.getElementById("result")

// function Button(text, background){
//   this.text = text;
//   this.background = background;
//   div.appendChild(this.element())
// }

// Button.prototype.element = function() {
//   let buttonElement = document.createElement("button")
//   buttonElement.innerText = this.text
//   buttonElement.style.background = this.background
//   return buttonElement
// }


class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    let buttonElement = document.createElement("button")
    buttonElement.innerText = this.text
    buttonElement.style.background = this.background
    buttonElement.style.color = this.color
    return buttonElement
  }
  appendTo(target) {
    let targetElement = document.querySelector(target)
    targetElement.appendChild(this.element())
    return targetElement
  }
  static blueButton(text){
    return new Button(text, 'blue', 'white')
  }
}


let btn = Button.blueButton('vender')
btn.appendTo('body')

// class Button {
//   constructor(options) {
//     this.options = options
//   }
//   static createButton(text, background, color) {
//     let buttonElement = document.createElement("button")
//     buttonElement.innerText = text
//     buttonElement.style.background = background
//     buttonElement.style.color = color
//     return buttonElement
// }
// }

// let blueOptions = {
//   backgound: 'blue',
//   text: 'Comprar',
//   color: 'white'
// }

// let blueButton = new Button(blueOptions)
// let blueButtonStatic = Button.createButton('clique', 'blue', 'white')

console.log(btn)