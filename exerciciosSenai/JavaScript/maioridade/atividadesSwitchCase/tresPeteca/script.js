// 3) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classificação: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro)

let arremessoUm = prompt('Digite os pontos do primeiro arremesso:')
let arremessoDois = prompt('Digite os pontos do segundo arremesso:')
let arremessoTres = prompt('Digite os pontos do terceiro arremesso:')

let somaPontos = arremessoUm + arremessoDois + arremessoTres

switch(true){

    case (somaPontos == 15) :

    alert(`Deus da Peteca`)
    break

    case (somaPontos >= 10 && 15 > somaPontos) :

    alert(`Petequeiro Profissa`)
    break

    case (somaPontos > 10 && 5 >= somaPontos) :

    alert(`Petequeiro de Final de Semana`)
    break

    case (somaPontos > 5 && 1 >= somaPontos) :

    alert(`Pseudo Petequeiro`)
    break

    case (somaPontos = 0) :

    alert(`Nunca Petequeiro`)
    break


}