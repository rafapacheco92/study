let inputIdadeUm = document.getElementById("idUm")
let inputIdadeDois = document.getElementById("idDois")
let inputIdadeTres = document.getElementById("idTres")
let inputIdadeQuatro = document.getElementById("idQuatro")
let inputIdadeCinco = document.getElementById("idCinco")

let maiorIdadeInp = document.getElementById("maiorIdd")

let divResultado = document.getElementById("resultadoPage")

//pegou todos ids para cada variável

let somaIdades, maiorIdade = 0, mediaIdades

//definiu variáveis à serem definidas


function Calcular(){
    
    somaIdades = Number(inputIdadeUm.value) + Number(inputIdadeDois.value) + Number(inputIdadeTres.value) + Number(inputIdadeQuatro.value) + Number(inputIdadeCinco.value) 

    if (Number(inputIdadeUm.value) > maiorIdade){

        maiorIdade = Number(inputIdadeUm.value)

    }
    if (Number(inputIdadeDois.value) > maiorIdade){

        maiorIdade = Number(inputIdadeDois.value)

    }    
    if (Number(inputIdadeTres.value) > maiorIdade){

        maiorIdade = Number(inputIdadeTres.value)

    }
    if (Number(inputIdadeQuatro.value) > maiorIdade){

        maiorIdade = Number(inputIdadeQuatro.value)

    }
    if (Number(inputIdadeCinco.value) > maiorIdade){

        maiorIdade = Number(inputIdadeCinco.value)

    }

    maiorIdadeInp.value = maiorIdade

    mediaIdades = (somaIdades / 5).toFixed(2)

    divResultado.innerHTML = "<br><br>" + "Media das idades: " + mediaIdades

}
