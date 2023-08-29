let cpfsList = document.querySelectorAll('.cpf li')

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText)
}

let result = elementsInnerText(cpfsList)

const limpaCPF = (cpf) => {
  return cpf.replace(/\D/g, '')
}

const montaCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCPF = (cpfs) => {
  return cpfs.map(limpaCPF).map(montaCPF)
  }

const substituirCPF = (cpfsElements) => {
  let cpfs = elementsInnerText(cpfsElements)
  let cpfsFormatados =  formatarCPF(cpfs)

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index]
  })

}
