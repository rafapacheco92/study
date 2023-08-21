# 1) Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela.

# numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# for i in range (15, 5, -1):
#     numeros.pop(i-1)

# print(numeros)

# 2) Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final  mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)

# vetor = []

# for i in range (0, 10):
#     numero = int(input(f'Digite o {i+1}º número: '))
#     vetor.append(numero)

# somaUm = (sum(vetor[0:5]))
# somaDois = (sum(vetor[5:10]))

# print(f'soma um: {somaUm}, soma dois? {somaDois}')

# 3) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas

# fruta = ''
# salada = []

# while fruta != 'cereja':

#     fruta = input('Qual fruta você deseja adicionar? ')
#     salada.append(fruta)

# print(f'Sua salada de frutas está pronta!')

# 4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

# vetorUm = []
# vetorDois = []
# fusaoVetor = []

# def juntaVetor(vetUm, vetDois):
#     contUm = 0
#     contDois = 0
#     for i in range (1, 7):
#         if i % 2 != 0:
#             fusaoVetor.append(vetUm[contUm])
#             contUm += 1
#         else:
#             fusaoVetor.append(vetDois[contDois])
#             contDois += 1
#     print(fusaoVetor)

# for i in range (0, 6):
#     numero = int(input(f'Digite o {i+1}º número: '))
#     if i < 3:
#         vetorUm.append(numero)
#     else:
#         vetorDois.append(numero)

# juntaVetor(vetorUm, vetorDois)

# 5) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. (Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).

# vetorNumeros = []
# vetorMultiplicados = []
# maiorNumero = 0

# for i in range (1, 6):
#     numero = int(input(f'Digite o {i}º número: '))
#     vetorNumeros.append(numero)
#     if numero > maiorNumero:
#         maiorNumero = numero

# indexMaior = vetorNumeros.index(maiorNumero)
# vetorNumeros.pop(indexMaior)

# for i in range (0, len(vetorNumeros)):
#     numeroMult = vetorNumeros[i] * maiorNumero
#     vetorMultiplicados.append(numeroMult)

# print(vetorMultiplicados)
# print(sum(vetorMultiplicados))

# 6) Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e com palavras).

# mainVetor = []

# for i in range (1, 7):
#     element = int(input(f'Digite o {i}º número: '))
#     mainVetor.append(element)


# reversedVetor = mainVetor.copy()
# reversedVetor.reverse()

# print(mainVetor)
# print(reversedVetor)

# if mainVetor == reversedVetor:
#     print('É um palindromo!')
# else:
#     print('Não é um palindromo!')

# 7) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.

# vetor = [1, 2, 3, 4, 5, 3, 2, 3, 1, 3]
# indices = []

# numero = int(input('Digite o número à ser verificado: '))

# for i in range (0, len(vetor)):
#     if numero == vetor[i]:
#         indices.append(i)
        
# print(vetor)
# print(indices)
