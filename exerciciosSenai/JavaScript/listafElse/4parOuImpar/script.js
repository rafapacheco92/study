let numero = document.getElementById("inpNumero")
let divResultado = document.getElementById("divResultadoId")
let inputResultado = document.getElementById("idResultado")

function Calculo(){

    if (Number(numero.value) % 2 == 0){

        // alert (`O Número é par.`)
        inputResultado.value = ("O número é par.")
        divResultado.innerHTML = "<br>" + "O número é par."
    }
    else {

        // alert (`O Número é impar.`)
        inputResultado.value = ("O número é impar.")
        divResultado.innerHTML = "<br>" + "O número é impar."
    }    

}