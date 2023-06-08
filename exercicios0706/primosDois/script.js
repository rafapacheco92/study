let naoPrimo = false
let resultado = ''
let numeroDigitado

for(j=0; j<5; j++){

numeroDigitado = Number(prompt('Digite um número:'))

for (i=1; i<= numeroDigitado; i++){

    if (i > 1 && i < numeroDigitado){
        if (numeroDigitado % i == 0) {
            naoPrimo = true
        }
    }
}

if(naoPrimo == true || numeroDigitado == 1){
    resultado += `${numeroDigitado} não é primo\n`
} else {
    resultado += `${numeroDigitado} é primo\n`
}
naoPrimo = false
}

alert(resultado)