# nome = 'João'

# if nome == 'Rafael':
#     print('Bem vindo gatão')
# else:
#     print('Bem vindo feioso')

# numero = int(input('Digite um número: '))

# match numero:
#     case 0:
#         print('Zero!')
#     case 1:
#         print('Um!')
#     case 2:
#         print('Dois!')
#     case 3:
#         print('Três!')
#     case other:
#         print('Só vale de 0 à 3!')

        
cidade = input('Digite sua cidade: ')

match cidade:
    case 'floripa':
        print('Manézinho')
    case 'são josé':
        print('Joséfense')
    case 'palhoça':
        print('Palhocense')
    case 'biguaçu':
        print('Biguaçuíno')
    case other:
        print('Haole')