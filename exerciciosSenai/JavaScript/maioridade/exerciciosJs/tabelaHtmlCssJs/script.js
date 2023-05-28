let quantDog = document.getElementById("qntDogID")
let quantSalada = document.getElementById("qntSaladaID")
let quantBacon = document.getElementById("qntBaconID")
let quantTorrada = document.getElementById("qntTorradaID")
let quantRefri = document.getElementById("qntRefriID")

let valUm = 4
let valDois = 4.5
let valTres = 5
let valQuatro = 2
let valCinco = 1.5

let fatura = document.getElementById("totalFinal")


function totalFatura() {
    
    let totalUm
    let totalDois
    let totalTres
    let totalQuatro
    let totalCinco
    let total
    
    totalUm = Number(quantDog.value) * valUm
    totalDois = Number(quantSalada.value) * valDois
    totalTres = Number(quantBacon.value) * valTres
    totalQuatro = Number(quantTorrada.value) * valQuatro
    totalCinco = Number(quantRefri.value) * valCinco
    total = totalUm + totalDois + totalTres + totalQuatro + totalCinco

    alert (`O total da fatura é de R$${total.toFixed(2)}.`)

    
}