// 1) O cardápio de uma casa de lanches é dado pela tabela abaixo:

// Código Produto Preço Unitário (R$)

// 100 Cachorro Quente R$1,70
// 101 Bauru Simples R$2,30
// 102 Bauru com Ovos R$2,60
// 103 Hamburguer R$2,40
// 104 Cheeseburguer R$2,50
// 105 Refrigerante R$1,00

// Escreva um programa que leia o código do item escolhido pelo consumidor e a quantidade calculando e mostrando o valor a pagar. Não será necessário exibir o produto e o valor, somente o valor final.

let totalFatura
let itemDesejado = prompt('Selecione o item desejado:\n100 Cachorro Quente R$1,70\n101 Bauru Simples R$2,30\n102 Bauru com Ovos R$2,60\n103 Hamburguer R$2,40\n104 Cheeseburguer R$2,50\n105 Refrigerante R$1,00')
let quantidadeDesejada = prompt('Quantas unidades?')

switch(itemDesejado){

    case '100':

    totalFatura = 1.70 * quantidadeDesejada
    alert(`O total da sua fatura é de R$${totalFatura}0.`)
    console.log(totalFatura)
    break

    case '101':

    totalFatura = 2.30 * quantidadeDesejada
    alert(`O total da sua fatura é de R$${totalFatura}0.`)
    console.log(totalFatura)
    break

    
    case '102':

    totalFatura = 2.60 * quantidadeDesejada
    alert(`O total da sua fatura é de R$${totalFatura}0.`)
    console.log(totalFatura)
    break

    
    case '103':

    totalFatura = 2.40 * quantidadeDesejada
    alert(`O total da sua fatura é de R$${totalFatura}0.`)
    console.log(totalFatura)
    break

    
    case '104':

    totalFatura = 2.50 * quantidadeDesejada
    alert(`O total da sua fatura é de R$${totalFatura}0.`)
    console.log(totalFatura)
    break

    
    case '105':

    totalFatura = 1.00 * quantidadeDesejada
    alert(`O total da sua fatura é de R$${totalFatura}0.`)
    console.log(totalFatura)
    break


    default:

    alert('Código Inválido')

}