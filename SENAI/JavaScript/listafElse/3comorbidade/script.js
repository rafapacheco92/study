let nome = document.getElementById("inpNome")
let idadeInput = document.getElementById("inpIdade")
let comorbidadeInput = document.getElementById("inpComorbidade")
let inpResultado = document.getElementById("idInpResultado")
let divResultado = document.getElementById("idDivResultado")

function Calculo(idade,comorbidade){

  
    let idade = Number(idadeInput.value)
    let comorbidade = comorbidadeInput.value

    if(idade >= 60 || comorbidade.value === S) {

        alert ("Você pode se vacinar!")
        inpResultado.value = ("Você pode se vacinar!")
        divResultado.innerHTML = "Você pode se vacinar!"
        console.log(idade)
        console.log(comorbidade)

    }

    else {

        alert =("Você não pode se vacinar!")
        inputResultado.value = ("Você não pode se vacinar!")
        divResultado.innerHTML = "Você não pode se vacinar!"
        console.log(idade)
        console.log(comorbidade)
    
}
    }
    console.log(idade)
    console.log(comorbidade)