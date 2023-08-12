let btnInit = document.querySelector('.iniciar')
let btnPause = document.querySelector('.pausar')
let pTime = document.querySelector('.tempo')

btnInit.addEventListener('click', startTimer)
btnPause.addEventListener('click', pauseTimer)
btnPause.addEventListener('dblclick', resetTimer)

i = 0
let setStart


function startTimer() {
  setStart = setInterval(() => { 
  pTime.innerText = i++}, 100)
  btnInit.setAttribute('disabled', '')
}

function pauseTimer() {
clearInterval(setStart)
btnInit.removeAttribute('disabled')
}
function resetTimer() {
i = 0
pTime.innerText = i
}