let idadeUm = document.getElementById("inpIdadeUm")
let idadeDois = document.getElementById("inpIdadeDois")
let idadeTres = document.getElementById("inpIdadeTres")
let idadeQuatro = document.getElementById("inpIdadeQuatro")
let idadeCinco = document.getElementById("inpIdadeCinco")

var maiorIdade = 0
let mediaIdade

function Calculo(){

    mediaIdade = (Number(idadeUm.value) + Number(idadeDois.value) + Number(idadeTres.value) + Number(idadeQuatro.value) + Number(idadeCinco.value)) / 5

    if (Number(idadeUm.value) >= maiorIdade){
        maiorIdade === idadeUm
    }
    if (Number(idadeDois.value) >= maiorIdade){
        maiorIdade === idadeDois
    }
    if (Number(idadeTres.value) >= maiorIdade){
        maiorIdade === idadeTres
    }
    if (Number(idadeQuatro.value) >= maiorIdade){
        maiorIdade === idadeQuatro
    }
    if (Number(idadeCinco.value) >= maiorIdade){
        maiorIdade === idadeCinco
    }

    alert(`A maior idade é ${maiorIdade}, e a média é de ${mediaIdade.toFixed(0)}`)
    console.log(maiorIdade, mediaIdade.toFixed(0))

    }