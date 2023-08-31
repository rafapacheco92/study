export default class ValidarCPF {
  constructor(element){
    this.element = element;
  }
  limpar(cpf){
    return cpf.replace(/\D/g, '')
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf)
    return this.construir(cpfLimpo)
  }
  validar(cpf) {
    let matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
    return (matchCpf && matchCpf[0] === cpf)
  }
  validarNaMudanca(cpfElement) {
    if(this.validar(cpfElement.value)){
      cpfElement.value = this.formatar(cpfElement.value)
      cpfElement.classList.remove('erro')
      cpfElement.classList.add('valido')
      cpfElement.nextElementSibling.classList.remove('ativar')
    }else{
      cpfElement.classList.add('erro')
      cpfElement.classList.remove('valido')
      cpfElement.nextElementSibling.classList.add('ativar')
    }
  }
  addEvent() {
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element)
    })
    }
  addErrorSpan() {
    let errorElement = document.createElement('span')
    errorElement.classList.add('error-text')
    errorElement.innerText = 'CPF Inválido'
    this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling)
  }
  init() {
    this.addEvent();
    this.addErrorSpan()
    return this
  }



}