naoPrimo = false
numeroDigitado = Number(prompt('Digite um número:'))

for (i=1; i<= numeroDigitado; i++){

    if (i > 1 && i < numeroDigitado){
        if (numeroDigitado % i == 0) {
            naoPrimo = true
        }
    }
}

if(naoPrimo == true || numeroDigitado == 1){
    alert('Não é primo!')
} else {
    alert('É primo')
}