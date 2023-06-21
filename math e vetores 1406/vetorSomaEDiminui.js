// 3) Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)

let vetor = []
let addNew
let somaUm = 0
let somaDois = 0

for(i = 0; i < 10; i++){
    addNew = Number(prompt(`Digite o ${i+1} número:`))
    vetor.push(addNew)

    if(i < 5){
         somaUm += addNew
    }else {
        somaDois += addNew
    }
}

let resultado = somaUm - somaDois

console.log(resultado)