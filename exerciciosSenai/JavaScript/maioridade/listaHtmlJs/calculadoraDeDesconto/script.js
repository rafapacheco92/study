let quantUm = document.getElementById("quantidadeUm")
let valUm = document.getElementById("valorUm")
let totalUm

let quantDois = document.getElementById("quantidadeDois")
let valDois = document.getElementById("valorDois")
let totalDois

let quantTres = document.getElementById("quantidadeTres")
let valTres = document.getElementById("valorTres")
let totalTres

let quantQuatro = document.getElementById("quantidadeQuatro")
let valQuatro = document.getElementById("valorQuatro")
let totalQuatro

let perDesconto = document.getElementById("percDesconto")

let total
let totalDesconto
let valorFinal

function mostraTotal(){

    totalUm = Number(quantUm.value) * Number(valUm.value)
    totalDois = Number(quantDois.value) * Number(valDois.value)
    totalTres = Number(quantTres.value) * Number(valTres.value)
    totalQuatro = Number(quantQuatro.value) * Number(valQuatro.value)
    total = totalUm + totalDois + totalTres + totalQuatro
    totalDesconto = total * (Number(perDesconto.value) / 100)
    valorFinal = total - totalDesconto

    alert(`O valor final com desconto aplicado é de R$${valorFinal.toFixed(2)}`)
    
}