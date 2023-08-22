# 1) Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).

precoArroz = float(input('Digite o preço do arroz: '))
precoBatata = float(input('Digite o preço da Batata Palha: '))
precoSuco = float(input('Digite o preço do Suco: '))
nota = 100
troco = nota - precoArroz - precoBatata - precoSuco

print(f'O valor do troco é de: {troco}')

# 2) Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a). Faça um programa no qual seja digitado a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.

alunos = int(input('Digite o número de alunos: '))
quantidadeBombom = alunos * 2 + 1

print(f'A quantodade de bombons necessária é de: {quantidadeBombom}')

# 3) Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.

semanaUm = float(input('Digite quantas horas você estudou na primeira semana: '))
semanaDois = float(input('Digite quantas horas você estudou na segunda semana: '))
semanaTres = float(input('Digite quantas horas você estudou na terceira semana: '))
semanaQuatro = float(input('Digite quantas horas você estudou na quarta semana: '))
mediaSemanal = (semanaUm + semanaDois + semanaTres + semanaQuatro) / 4
print(f'A média semanal foi de {mediaSemanal} horas.')

# 4) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.

valorPrimeiro = float('Digite o valor do Primeiro livro: ')
valorSegundo = float('Digite o valor do Segundo livro: ')
valorTerceiro = float('Digite o valor do Terceiro livro: ')
valorTotal = valorPrimeiro + valorSegundo + valorTerceiro
valorDesconto = valorTotal * 0.85
print(f'O valor total é de R${valorTotal}.\nO valor com desconto é de {valorDesconto}')

# 5) Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.

distancia = float('Digite a distância percorrida: ')
tempo = float('Digite em quanto tempo você fez a trilha: ')
media = distancia / tempo
print(f'Sua média de velocidade durante essa trilha foi de {media}km/h')

# 6) Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.

base = int(input('Digite o número base:'))
expoente = int(input('Digite o número expoente:'))
resultado = base ** expoente
print(f'O resultado é {resultado}')

# 7) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

machos = 9
femeas = 5
casais = int(input('Digite quantos casais existem: '))
areaDominada = (casais * 400) + ((machos + femeas - casais * 2) * 320)
print(f'A área total coberta é de {areaDominada}')

# 8) Criar um programa que realize o cálculo de uma média da faculdade. A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela.

avUm = float(input('Digite a nota da Av1: '))
avDois = float(input('Digite a nota da Av2: '))
avTres = float(input('Digite a nota da Av3: '))
media = ((avTres * 3) + avUm + avDois) / 5
print(f'A nota final ficou {media}')

# 9) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

largura = float(input('Digite a largura da piscina: '))
comprimento = float(input('Digite a comprimento da piscina: '))
area = largura * comprimento
azuleijos = area * 120
valor = azuleijos / 60 * 45.5
print(f'O total de azuleijos é de {azuleijos} e o orçamento deles é de R${valor}.')

# 10) Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.

distancia = float(input('Digite a distância total percorrida: '))
litros = float(input('Digite o total de litros consumidos: '))
media = distancia / litros
print(f'A média de km/l é de {media}')

# 11) Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.

publico = int(input('Digite o valor do público estimado: '))
banheiros = publico / 50
bares = publico / 150
print(f'O número estimado é de {banheiros} banheiros e de {bares} bares.')

# 12) Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar.

pessoas = int(input('Digite quantas pessoas ficarão hospedadas: '))
diarias = int(input('Digite quantas diárias serão: '))
valorDiarias = diarias * 280
cafe = int(input('Digite o número de optantes por café: '))
totalCafe = (cafe * 15) * diarias
print(f'O valor total é de {valorDiarias + totalCafe}')

# 13) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.

mCubico = 15
pessoas = int(input('Digite quantas pessoas irão no passeio: '))
valorPessoas = pessoas * 20
tempo = int(input('Digite quanto tempo será o passeio: '))
valorTempo = tempo / 5 * 15
totalFatura = valorPessoas + valorTempo
print(f'O total do passeio é de R${totalFatura}.')

# 14) As baleias da Groênlandia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.

idade = 200
reproducao = 4
totalFilhos = idade / reproducao
mediaDecada = totalFilhos / 20
print(f'O total de filhos é de {totalFilhos}, e a média em uma década é de {mediaDecada}')