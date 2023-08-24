// let button = {
//     get size() {
//         return this._number || 200;
//     },
//     set size(value) {
//         this._number = value * 300
//     }
// }

// let fruits = {
//     list: [],
//     set nova(fruit) {
//         this.list.push(fruit);
//     }
// }

// fruits.nova = 'banana'
// fruits.nova = 'morango'

// class Button {
//     constructor(text, background, color) {
//         this.text = text;
//         this.background = background;
//         this.color = color;
//     }
//     get element() {
//         let type = this._elementType || 'button';
//         let buttonElement = document.createElement(type);
//         buttonElement.textContent = this.text;
//         buttonElement.style.backgroundColor = this.background;
//         buttonElement.style.color = this.color;
//         return buttonElement;
//     }
//     set element(type) {
//         this._elementType = type;
//     }
// }

// let botaoGreen = new Button('Botão', 'green', 'yellow')
// document.body.appendChild(botaoGreen.element)