import ValidarCPF from './validar-cpf.js'

const cpf = document.querySelector('#cpf')
const validarCPF = new ValidarCPF()

console.log(validarCPF.formatar())