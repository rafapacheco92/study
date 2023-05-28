let anual = document.getElementById("inpAnual")
let piso = document.getElementById("inpPiso")

let mensal

function Calcular() {

    mensal = Number(anual.value) / 12

    if ((Number(mensal.value)) >= (Number(piso.value))){

        alert (`Seu salário mensal é de R$${mensal}, está dentro do piso`)
    
    }

    if ((Number(mensal.value)) < (Number(piso.value))){

        alert(`Seu salário mensal é de R$${mensal}, está abaixo do piso.`)

    }

}