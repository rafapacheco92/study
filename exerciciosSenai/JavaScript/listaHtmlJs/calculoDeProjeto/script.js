let quantUm = document.getElementById("quantidadeUm")
let quantDois = document.getElementById("quantidadeDois")
let quantTres = document.getElementById("quantidadeTres")
let quantQuatro = document.getElementById("quantidadeQuatro")
let quantCinco = document.getElementById("quantidadeCinco")

let valUm = document.getElementById("valorUm")
let valDois = document.getElementById("valorDois")
let valTres = document.getElementById("valorTres")
let valQuatro = document.getElementById("valorQuatro")
let valCinco = document.getElementById("valorCinco")

let finalDiv = document.getElementById("totalFinal")

let totalUm
let totalDois
let totalTres
let totalQuatro
let totalCinco
let total

function ValorSomaProjetos() {

    totalUm = Number(quantUm.value) * Number(valUm.value)
    totalDois = Number(quantDois.value) * Number(valDois.value)
    totalTres = Number(quantTres.value) * Number(valTres.value)
    totalQuatro = Number(quantQuatro.value) * Number(valQuatro.value)
    totalCinco = Number(quantCinco.value) * Number(valCinco.value)
    total = totalUm + totalDois + totalTres + totalQuatro + totalCinco

    document.getElementById("inputUm").value = totalUm.toFixed(2)
    document.getElementById("inputDois").value = totalDois.toFixed(2)
    document.getElementById("inputTres").value = totalTres.toFixed(2)
    document.getElementById("inputQuatro").value = totalQuatro.toFixed(2)
    document.getElementById("inputCinco").value = totalCinco.toFixed(2)
    document.getElementById("resultadoInput").value = total.toFixed(2)

    finalDiv.textContent = (`O total investido foi de R$${total.toFixed(2)}.`)

    alert(`O total investido foi de R$${total.toFixed(2)}.`)
    
}