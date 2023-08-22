# try:

#     numeroUm = int(input('Digite o primeiro número: '))
#     numeroDois = int(input('Digite o segundo número: '))

#     resultado = numeroUm / numeroDois

#     print(resultado)


# except ZeroDivisionError:

#     print('Não é possível dividir um número por 0.')

# except ValueError:
#     print('Apenas calculo números inteiros.')

nomeArquivo = 'arquivo.txt'

try:

    arquivo = open(nomeArquivo, 'r') # read

except FileNotFoundError:

    arquivo = open(nomeArquivo, 'a') # append

else:

    print(f'Arquivo {nomeArquivo}, já existe.')

finally:
    arquivo.close()