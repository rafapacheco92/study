// 5) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

vetorUm = [1, 2, 3]
vetorDois = [4, 5, 6]
contadorA = 0
contadorB = 0
vetorTres = [vetorUm[contadorA], vetorDois[contadorB], vetorUm[++contadorA], vetorDois[++contadorB], vetorUm[++contadorA], vetorDois[++contadorB]]

console.log(vetorUm)
console.log(vetorDois)
console.log(vetorTres)