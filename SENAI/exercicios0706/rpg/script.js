// 3) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. Ao final mostrar a soma de cada jogador e suas posições. (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta)

let soma = 0
let arremesso
let texto = ''
let jogadores = Number(prompt('Digite o número de Jogadores:'))


for(i=0; i<4; i++){
    texto += `Jogador ${i+1}:\n`
    for(j=1; j<5; j++){
        arremesso = Number(prompt(`Jogador ${i+1}\nDigite o valor do ${j} arremesso:`))
        if (j % 2 == 0){
           soma += arremesso 
        }
        texto+= `Soma dos pontos: ${soma}\n`
    }
}

alert(texto)