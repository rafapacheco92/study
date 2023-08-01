function areaQuadrado(lado){
  return lado * lado
}

console.log(areaQuadrado(10))
// Vai retornar 100

function corFavorita(cor){
  if (cor === 'azul'){
    return 'Eu gosto do céu'
  } else if (cor === 'verde'){
    return 'Eu gosto de mato'
  } else {
    return 'Eu não gosto de cores'
  }
}
corFavorita()

addEventListener('click', function(){console.log('oi')})

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe sua idade"'
  } else if (idade >= 60){
    return true
  } else {
    return false
  }
}

function faltaVisitar(paisesVisitados){
  var totalPaises = 193
  return `Faltam visitar ${totalPaises - paisesVisitados} países.`
}