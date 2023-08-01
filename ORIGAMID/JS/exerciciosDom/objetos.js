var pessoa = {
  nome: 'Rafael',
  idade: 30,
  profissao: 'Programador',
  possuiFaculdade: false,
}
//Acessando as infos
pessoa.nome // return Rafael
pessoa.possuiFaculdade // return false

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function(lado){
    return this.lados * lado
  }
}

quadrado.hasOwnProperty('lados')

let eu = {
  nome: 'Rafael',
  sobrenome: 'Pacheco',
  idade: 30,
  email: 'rafaelsoaresp@hotmail.com'
}

eu.nomeCompleto = function() {
  return `${eu.nome} ${eu.sobrenome}`
}

let cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem'){
      return 'Latir'
    } else {
      return 'nada'
    }
  }
}