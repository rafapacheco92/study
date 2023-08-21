# 1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

# nome = input('Nome do cliente:')
# idade = input('Idade do cliente:')
# nacionalidade = input('Nacionalidade do cliente:')
# endereco = input('Endereço do cliente:')
# print(f'Cliente {nome}, com {idade} anos, {nacionalidade}, reside no endereço {endereco}')

# 2) Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números.

# numUm = input('Digite o primeiro número:')
# numDois = input('Digite o segundo número:')
# resultado = int(numUm) * int(numDois)
# print(resultado)

# 3) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.

# anoNasc = int(input('Digite o seu ano de nascimento (YYYY):'))
# anoAtual = int(2023)
# idadeAnos = anoAtual - anoNasc
# idadeMeses = idadeAnos * 12
# idadeSemanas = idadeMeses * 4
# idadeDias = idadeSemanas * 7

# print(f'A sua idade é de:\n{idadeAnos} anos\n{idadeMeses} meses\n{idadeSemanas} semanas\n{idadeDias} dias.')

# 4) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela.

# celcius = float(input('Digite quantos graus célsius:'))
# calculo = (celcius * 1.8) + 32

# print(calculo)

# 5) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

# eleitores = int(input('Digite o número de eleitores:'))
# votosX = int(input('Digite o número de votos do candidato X:'))
# votosY = int(input('Digite o número de votos do candidato Y:'))
# votosBranco = int(input('Digite o número de votos em Branco:'))
# votosNulos = int(input('Digite o número de votos Nulos:'))
# perX = float((votosX / eleitores) * 100)
# perY = float((votosY / eleitores) * 100)
# perBranco = float((votosBranco / eleitores) * 100)
# perNulos = float((votosNulos / eleitores) * 100)

# print(f'>>> Apuração de Votos <<<\nVotos X: {votosX} - {perX}%\nVotos Y: {votosY} - {perY}%\nVotos Branco: {votosBranco} - {perBranco}%\nVotos Nulos: {votosNulos} - {perNulos}%\n')

# 6) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula.

# peso = float(input('Digite o seu peso:'))
# altura = float(input('Digite o seu altura:'))
# imc = peso / (altura * altura)

# print(f'O seu IMC é de {round(imc, 3)}')

# 7) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais.

# plastico = float(input('Quantos kg de plástico:'))
# papel = float(input('Quantos kg de papel:'))
# metal = float(input('Quantos kg de metal:'))
# valorPlastico = 2
# divisorPlastico = 10
# valorPapel = 3
# divisorPapel = 30
# valorMetal = 5
# divisorMetal = 50
# totalPlastico = (plastico / divisorPlastico) * valorPlastico
# totalPapel = (papel / divisorPapel) * valorPapel
# totalMetal = (metal / divisorMetal) * valorMetal
# totalRecebido = totalPlastico + totalPapel + totalMetal
# print(f'O valor total recebiro será de: R${totalRecebido}')

# 8) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

# totalChopp = int(300)
# totalDisperdicio = int(input('Digite o total disperdiçado:'))
# totalSobra = int(input('Digite o total que sobrou:'))
# pessoas = 45
# totalBebido = totalChopp - totalDisperdicio - totalSobra
# mediaPessoa = totalBebido / pessoas
# print(f'A média de chopp por pessoas é de: {mediaPessoa} litros.')