function Calculo(){

    let peso = Number(document.getElementById("inpPeso").value)
    let altura = Number(document.getElementById("inpAltura").value)
    let imc = peso / (altura * altura)

    if(imc >= 25) {

        alert("Você está acima do peso")
        console.log(imc)

    }
    else if(imc < 25 && imc >= 18 ){

        alert("Você está no peso ideal")
        console.log(imc)

    }

    else {
        alert("Você está abaixo do peso.")
        console.log(imc)
    }

    }