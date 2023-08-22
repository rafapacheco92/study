# 1) Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.

# def taboada(num):
#     for i in range(1, 11):
#         print(num * i)

# numero = int(input('Digite o número que você quer a taboada: '))

# taboada(numero)

# 2) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.

# def comparaSenha(password, confirm):
#     while password != confirm:
#         print('Senhas não correspondem. Digite novamente')
#         password = input('Digite sua senha:')
#         confirm = input('Confirme sua senha: ')
#     print('Acesso confirmado.')

# senha = input('Digite sua senha: ')
# confirma = input('Confirme sua senha: ')

# comparaSenha(senha, confirma)

# 3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

# 1) Ataque Bomba -100HP
# 2) Ataque Granada -80HP
# 3) Ataque Arqueiro -40HP
# 4) Defesa Escudo +20HP

# Mostrar o HP do castelo atualizado a cada rodada. Caso o HP do castelo acabe, mostrar "Jogo encerrado, com X rodadas!"

# hp = 500
# rodadas = 0

# while hp > 0:

#     mudancaHp = input('Digite qual sua estratégia da rodada:\n1) Ataque Bomba\n2) Ataque Granada\n3)Ataque Arqueiro\n4) Defesa escudo\n')

#     match mudancaHp:
#         case '1':
#             hp -= 100
#         case '2':
#             hp -= 80
#         case '3':
#             hp -= 40
#         case '4':
#             hp += 20
#         case other:
#             print('Opção inválida!')
#     rodadas += 1

# print(f'Jogo encerrado, com {rodadas} rodadas')