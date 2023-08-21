# 1) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".

# contador = 10
# while contador > 0:
#     resposta = int(input('Contagem regressiva! '))
#     if resposta != contador:
#         print('Sequencia incorreta!')
#         break
#     elif resposta == 1:
#         print('Você terminou a sequencia corretamente.')
#         break
#     contador -= 1
        
# 2) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

# idades = []
# somaIdades = 0

# for contador in range (1, 6):
#     idade = int(input(f'Digite a {contador} idade: '))
#     idades.append(idade)

# print(idades)

# for contador in range (1, 6):
#     somaIdades += idades[contador-1]
#     maiorIdade = 0
#     if idades[contador-1] > maiorIdade:
#         maiorIdade = idades[contador-1]

# mediaIdades = somaIdades / 5

# print(maiorIdade)
# print(mediaIdades)

# 3) Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).

# def fatorial(numero):
#     for contador in range ((numero-1), 0, -1):
#         numero *= contador
#     print (numero)

# numeroEscolhido = int(input('Digite o número à ser calculado o fatorial: '))

# fatorial(numeroEscolhido)

# 4) Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **). 

# numero = int(input('Digite o número: '))
# expoente = int(input('Digite o expoente: '))

# def exponencial(num, exp):
#     for i in range (1, (exp-1)):
#         num *= num
#     print(num)

# exponencial(numero,expoente)

# 5) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.

# numeros = []
# verificador = True

# def verificaPares(lista, verif):
#     for i in range (0, len(lista)):
#         div = numeros[i] % 2
#         if div != 0:
#             verif = False
    
#     print(verif)
    
#     if verif == False:
    
#         print('Nem todos números digitados são pares!')

#     else:

#         somaNumeros = sum(numeros)
#         media = somaNumeros / len(numeros)
#         print(f'A média dos números é: {media}.')


# for contador in range (0, 5):
#     numero = int(input(f'Digite o {contador+1}º número par: '))
#     numeros.append(numero)
#     print(numeros)

# verificaPares(numeros, verificador)

# 6) Joãozinho mede 1,75m de altura e cresce 1 cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

# joaozinho = 175
# pedrinho = 160
# anos = 0

# while joaozinho > pedrinho:
#     joaozinho += 1
#     pedrinho += 3
#     anos += 1

# print(f'Pedrinho irá ultrapassar Joãozinho em {anos} anos.')

# 7) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!” (DESAFIO: Mostrar na tela também a quantidade de frutas que foram adicionadas)

# fruta = ''
# salada = []

# while fruta != 'cereja':

#     fruta = input('Qual fruta você deseja adicionar? ')
#     salada.append(fruta)

# print(f'Sua salada de frutas está pronta!')
# print(f'Ela possui {len(salada)} frutas.')

# 8) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

# pontuacao = 0
# valorTotal = 0
# quantidadeMultas = int(input('Digite quantas multas serão cadastradas.'))

# for i in range (0, quantidadeMultas):
#     pontos = int(input('Digite quantos pontos: '))
#     pontuacao += pontos
#     valor = int(input('Digite o valor da multa: '))
#     valorTotal += valor

# print(f'Pontuação total: {pontuacao}')
# print(f'Valor total: R${valorTotal},00')

# if pontuacao >= 21:
#     print('Você está irregular!')
# else:
#     print('Você está regular.')

# 9) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

# numeros = []

# for i in range (1, 11):
#     numero = int(input(f'Digite o {i}º número: '))
#     if numero >= 0 and numero <= 50:
#         numeros.append(numero)

# print(max(numeros))
# print(min(numeros))
# print(numeros)


# 10) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia.

# valor = ''
# contUm = 0
# contCinco = 0
# contDez = 0
# contVinteCinco = 0
# contCinquenta = 0
# total = 0

# while valor != 0:
#     valor = float(input('Digite qual moeda você irá depositar: '))

#     match valor:
#         case 0.01:
#             total += valor
#             contUm += 1
        
#         case 0.05:
#             total += valor
#             contCinco += 1

#         case 0.1:
#             total += valor
#             contDez += 1

#         case 0.25:
#             total += valor
#             contVinteCinco += 1
        
#         case 0.5:
#             total += valor
#             contCinquenta += 1

# print(f'O total de moedas de R$0,01 foi de {contUm}, de R$0,05 foi de {contCinco}, de R$0,10 foi de {contDez}, de R$0,25 foi de {contVinteCinco} e de R$0,50 foi de {contCinquenta}. O valor total depositado foi de R${total}')

# 11) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).

# 12) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

# 13) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).

# 14) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas.

# 15) Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado.




# 1) Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

# 2) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.

# 3) Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro digitado pelo usuário.

# 4) Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, repetidamente. Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:

# a) O total gasto em reais dos vinis.
# b) O valor que sobrou em dinheiro.
# c) Quantos vinis foram comprados.
# d) A média de preço dos vinis.
# e) O vinil mais caro e o mais barato.

# 5) Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica (diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários (segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média.

# 6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), arredondando o número para baixo, cadastrar para cada sprint um título e um objetivo.

# 7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. Ao final mostrar a soma de cada jogador e suas posições. (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta)

# 8) Na maioria das linguagens de programação, é possível contar caracteres de uma string (palavra, frase, etc). Criar um sistema no qual o usuário digite 5 palavras e ao final mostre o tamanho em número de caracteres, de cada uma delas. (Pesquisar sobre o comando length, para solução).

# 9) Um determinado restaurante trabalha com limite de lotação de 50 pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e se os insumos estão "ok" ou "insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento (atingiu limite de pessoa ou faltaram insumos).