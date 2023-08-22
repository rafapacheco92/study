# nome = 'Rafael'
# idade = '30'
# cidade = 'Floripa'

# def mostraDados():
#     print(f'Nome: {nome}\nIdade: {idade}\nCidade: {cidade}')

# mostraDados()

#Parâmetros

# def somaNumeros(numeroUm, numeroDois):
#     print(numeroUm + numeroDois)

# somaNumeros(8,12)

# username = input('Digite seu usuário: ') 
# senha = input('Digite sua senha: ')

# def dadosUser(user, passw): #dentro do parentesis vai o parâmetro
#     print(f'User: {user}\nPass: {passw}')


# dadosUser(username, senha) #ao puxar a função, é o argumento


vida = 100
personagemUm = 20

def danoPersonagem(damage):
    return print(f'Vida: {vida - damage}')

danoPersonagem(personagemUm)