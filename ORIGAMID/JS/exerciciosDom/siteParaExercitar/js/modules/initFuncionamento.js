export default function initFuncionamento() {


}

let funcionamento = document.querySelector('[data-semana]')
let diasSemana = funcionamento.dataset.semana.split(',').map(Number)
let horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

let dataAgora = new Date()
let diaAgora = dataAgora.getDay()
let horarioAgora = dataAgora.getHours()

let semanaAberto = diasSemana.indexOf(diaAgora) !== -1
let horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

if(semanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto')
}