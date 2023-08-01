# Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa que simule esse sistema. A montagem do sorvete segue o modelo de estrutura PILHA, onde os sabores são "empilhados" um após o outro e quando algum tiver que ser removido, será sempre o último da pilha.

# 1- Adicionar sabor
# 2- Remover sabor
# 3- Visualizar sorvete
# 4- Finalizar pedido


# ======== MENSAGENS e VALIDAÇÕES ========
# Opção 1-> “Sabor adicionado!”   OU   “Limite de sabores atingido, remova um sabor!”
# Opção 2-> “Sabor removido!”   OU   “Não existem sabores adicionados!”
# Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.”   OU   “Seu sorvete não possui sabores!”
# Opção 4-> “Pedido realizado!”   OU   “Adicione pelo menos um sabor!”


# - Criar mensagem de boas vindas e menu funcional.
# - Criar uma lista para a pilha dos sabores.
# - Programar a opção de "Adicionar sabor" corretamente.
# - Programar a opção de "Remover sabor" corretamente.
# - Programar a opção de "Visualizar sorvete" corretamente.
# - Fazer as validações secundárias (lógica).
# - Mostrar mensagens para o usuário (prints).

sabores = []
opcao = 0
pedidoFinalizado = False



def addSabor(s):
  if len.sabores < 4:
    sabores.append(s)
  else:
    print('Limite de sabores atingido, remova um sabor.')
def removeSabor():
  if sabores:
    saborRemovido = sabores.pop()
    print(f'Sabor de {saborRemovido} removido!')

def visualizaSorvete():
  maximo = len(sabores)
  if sabores:
    for contador in range(0, maximo, 1):
      print(f'Camada 1 - Sabor {sabores[contador]}')
  else:
    print('Seu sorvete não possui sabores!')

  

print('Seja tem vindo(a) à sorveteria')
opcao = int(input('Selecione a opção desejada pelo numeral:\n1) Adicionar Sabor.\n2) Remover sabor\n3) Visualizar sorvete\n4) Finalizar pedido\n'))

if opcao < 1:
  print('Opção inválida!')
  opcao = int(input('Selecione a opção desejada pelo numeral:\n1) Adicionar Sabor.\n2) Remover sabor\n3) Visualizar sorvete\n4) Finalizar pedido\n'))


while pedidoFinalizado == False:

  match(opcao):
    case 1:
      sabor = (input('Digite o sabor que você quer adicionar: '))
      sabores.append(sabor)
      print('Sabor adicionado com sucesso.')
      opcao = int(input('Selecione a opção desejada pelo numeral:\n1) Adicionar Sabor.\n2) Remover sabor\n3) Visualizar sorvete\n4) Finalizar pedido\n'))

    case 2:
      removeSabor()
      opcao = int(input('Selecione a opção desejada pelo numeral:\n1) Adicionar Sabor.\n2) Remover sabor\n3) Visualizar sorvete\n4) Finalizar pedido\n'))

    case 3:
      visualizaSorvete()
      opcao = int(input('Selecione a opção desejada pelo numeral:\n1) Adicionar Sabor.\n2) Remover sabor\n3) Visualizar sorvete\n4) Finalizar pedido\n'))

    case 4: 
      if sabores:
        print('Pedido realizado!')
      else:
        print('Adicione pelo menos um sabor!')
      pedidoFinalizado = True
    case other:
      print('Opção inválida!')


