# 1) Crie um algoritmo no qual seja digitado a distância percorrida em quilômetros, o tipo do carro e informe ao final a média de consumo estimado de combustível. Sabendo-se que um carro do tipo A faz 8km/litro, o carro do tipo B faz 12km/litro e o tipo C faz 9km/litro. Caso seja fornecido um tipo de carro inválido (diferente de A, B ou C) o algoritmo deve mostrar uma mensagem "Tipo de carro inválido!" e encerrar.

# distancia = float(input('Digite a distância percorrida: '))
# tipoCarro = input('Digite o tipo de carro (A/B/C): ')
# A = 8
# B = 12
# C = 9

# if tipoCarro == 'A':
#     consumo = distancia / A
#     print(f'O gasto de combustível será de {consumo} litros')
# elif tipoCarro == 'B':
#     consumo = distancia / B
#     print(f'O gasto de combustível será de {consumo} litros')
# elif tipoCarro == 'C':
#     consumo = distancia / C
#     print(f'O gasto de combustível será de {consumo} litros')
# else:
#     print('Tipo de carro inválido!')

# 2) Crie um programa que leia três lados de um triângulo e determine se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.

# ladoA = int(input('Digite o tamanho do lado A:'))
# ladoB = int(input('Digite o tamanho do lado B:'))
# ladoC = int(input('Digite o tamanho do lado B:'))

# if ladoA == ladoB == ladoC:
#     print('O triângulo é equilátero.')
# elif ladoA == ladoB or ladoA == ladoC or ladoB == ladoC:
#     print('O triângulo é isóceles.')
# else:
#     print('O triângulo é escaleno')

# 3) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a soma das idades e a média das idades.

# somaIdades = 0
# nomeUm = input('Digite o nome da 1ª pessoa: ')
# idadeUm = int(input('Digite a idade da 1ª pessoa: '))
# somaIdades += idadeUm
# nomeDois = input('Digite o nome da 2ª pessoa: ')
# idadeDois = int(input('Digite a idade da 2ª pessoa: '))
# somaIdades += idadeDois
# nomeTres = input('Digite o nome da 3ª pessoa: ')
# idadeTres = int(input('Digite a idade da 3ª pessoa: '))
# somaIdades += idadeTres
# nomeQuatro = input('Digite o nome da 4ª pessoa: ')
# idadeQuatro = int(input('Digite a idade da 4ª pessoa: '))
# somaIdades += idadeQuatro
# nomeCinco = input('Digite o nome da 5ª pessoa: ')
# idadeCinco = int(input('Digite a idade da 5ª pessoa: '))
# somaIdades += idadeCinco
# mediaIdades = somaIdades / 5

# print(f'A soma das idades é de {somaIdades}')
# print(f'A média de idades {mediaIdades}')

# 4) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.

# freteFixo = 12.5
# valorCompra = int(input('Digite o valor da compra:'))
# categoriaAssinante = (input('Digite a categoria do assinante:\n- Premium\n- Gold\n- Silver\n- Não assinante: ')).lower()

# match categoriaAssinante:
#     case 'premium':
#         totalFatura = valorCompra * 0.8
#         print(f'O valor total da fatura é de {totalFatura}')
#     case 'gold':
#         totalFatura = (valorCompra * 0.8) + freteFixo
#         print(f'O valor total da fatura é de {totalFatura}')
#     case 'silver':
#         totalFatura = (valorCompra * 0.9) + freteFixo
#         print(f'O valor total da fatura é de {totalFatura}')
#     case other:
#         totalFatura = valorCompra
#         print(f'O valor total da fatura é de {totalFatura}')