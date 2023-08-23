import initCountdown from "./countdown.js";

let xmasCountdown = new initCountdown('24 December 2023 23:59:59 GMT-0300')
let nyeCountdown = new initCountdown('31 December 2023 23:59:59 GMT-0300')

let countingXmas = setInterval(() => {
  let result = document.querySelector('.resultXmas')
  let days = xmasCountdown.total.days
  let hours = xmasCountdown.total.hours
  let minutes = xmasCountdown.total.minutes
  let seconds = xmasCountdown.total.seconds
  result.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
})

let countingNye = setInterval(() => {
  let result = document.querySelector('.resultNye')
  let days = nyeCountdown.total.days
  let hours = nyeCountdown.total.hours
  let minutes = nyeCountdown.total.minutes
  let seconds = nyeCountdown.total.seconds
  result.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
})

