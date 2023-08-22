# While
# numero = 0

# while numero != 100:
    
#     numero = int(input('Número: '))
#     print(numero)

op = 0

while op != '3':

    op = input('Menu:\nDigite 1 para ganhar.\nDigite 2 para perder\nDigite 3 para sair.')

    match op:
        case '1':
            print('Ganhou')
        case '2':
            print('Perdeu')
        case '3':
            print('Saiu')