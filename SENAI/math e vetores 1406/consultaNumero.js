// 7) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.

let indices = []
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2]
let confere = Number(prompt('Digite o número que você quer verificar: '))

for(i = 0; i < vetor.length; i++){
    if (vetor[i] == confere){
        indices.push(i)
    }
}

alert(`O número existe e se encontra no(s) seguinte(s) indice(s): ${indices}`)