# 1) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média.

# avUm = float(input('Digite a nota da av1:'))
# avDois = float(input('Digite a nota da av2:'))
# avTres = float(input('Digite a nota da av3:'))

# media = (avUm + avDois + avTres)/3

# if media >= 7:
#     print('Aprovado!')
# else:
#     print('Reprovado!')

# 2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (salário mensal igual ou maior que o piso da categoria) ou se recebe abaixo do piso.

# salarioAnual = float(input('Digite seu salário anual: '))
# salarioMensal = salarioAnual / 12
# pisoSalarial = float(input('Digite o piso salarial da categoria:'))

# if salarioMensal > pisoSalarial:
#     print('Você está recebendo acima do piso!')
# elif salarioMensal == pisoSalarial:
#     print('Você está recebendo de acordo com o piso!')
# else:
#     print('Você está recebendo abaixo do piso!')

# 3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

# idade = int(input('Digite sua idade:'))
# comorbidade = input('Você possui comorbidades? (s/n): ')

# if idade >= 60 or comorbidade == 's':
#     print('Pode se vacinar!')
# else:
#     print('Não pode se vacinar!')

# 4) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).

# altura = float(input('Digite sua altura: '))
# peso = float(input('Digite seu peso:'))
# imc = round((peso / (altura ** 2)),2)

# print(imc)

# if imc > 25:
#     print('Você está acima do peso.')
# elif 25 >= imc and imc >= 18:
#     print('Você está no peso ideal!')
# else:
#     print('Você está abaixo do peso.')

# 5) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Perdir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

# username = 'admin'
# password = '123'

# user = input('Digite o nome do usuário:')
# passw = input('Digite a senha:')

# if user == username and passw == password:
#     print('Login efetuado!')
# elif user == username and passw != password:
#     print('Senha incorreta!')
# elif user != username and passw == password:
#     print('Usuário incorreto!')
# else:
#     print('Dados incorretos!')

# 6) Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!"

# especie = input('Digite o nome da espécie: ')
# populacao = int(input('Digite a população dele: '))

# if 500 > populacao:
#     print('Espécie criticamente em perigo.')
# elif 1000 > populacao:
#     print('Espécie em perigo.')
# elif 5000 > populacao:
#     print('Espécie vulnerável.')
# else:
#     print('Espécie saudável.')

# 7) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

# totalHabitantes = int(input('Digite o total de habitantes:'))
# totalArea = int(input('Digite o total da área (m²): '))
# densidade = totalHabitantes / totalArea

# if densidade >= 100:
#     print('Densidade alta.')
# elif densidade >= 25:
#     print('Densidade moderada.')
# else:
#     print('Densidade baixa.')