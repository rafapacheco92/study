export default function outsideClick(element, events, callback) {
  let html = document.documentElement
  let outside = 'data-outside'

  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
    setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))
  })
  element.setAttribute(outside, '')
  }
function handleOutsideClick(event) {
  if(!element.contains(event.target)){
    element.removeAttribute(outside)
    events.forEach(userEvent => {
    html.removeEventListener(userEvent, handleOutsideClick)
    })
    callback()
    
    }
  }
}