# fila = []

# while len(fila) < 5:
#     codigo = input('Digite 1 para chegou e 2 para saiu: ')
#     match codigo:
#         case '1':
#             fila.append('a')
#         case '2':
#             fila.pop(0)
# print('5 pessoas na fila, aguarde.')


notas = [7, 8, 4, 6, 8, 10]
somaNotas = 0

for i in notas:
    if i != notas[0] and i != notas[len(notas) - 1]:
        somaNotas += i

media = somaNotas / (len(notas) - 2)

print(f'A média ficou {media}')