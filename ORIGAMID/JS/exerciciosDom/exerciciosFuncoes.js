function verificaIdade(idade){
  if(typeof idade === 'number'){
    return true
  } else {
    return false
  }
}

function perimetroQuadrado(tamanho, lados){
  let perimetro = tamanho * lados
  console.log(perimetro)
}

function verificaPar(numero){
  if (numero % 2 == 0){
    return true
  }else{
    return false
  }
}

function verificaVar(variavel){
  return typeof variavel
}

addEventListener ('click', function(){console.log('Rafael Pacheco')})
