function Calcular(){
    
    let menorSegunda = Number(document.getElementById('inpMenorUm').value)
    let maiorSegunda = Number(document.getElementById('inpMaiorUm').value)
    let menorTerca = Number(document.getElementById('inpMenorDois').value)
    let maiorTerca = Number(document.getElementById('inpMaiorDois').value)
    let menorQuarta = Number(document.getElementById('inpMenorTres').value)
    let maiorQuarta = Number(document.getElementById('inpMenorTres').value)
    let menorQuinta = Number(document.getElementById('inpMenorQuatro').value)
    let maiorQuinta = Number(document.getElementById('inpMenorQuatro').value)
    let menorSexta = Number(document.getElementById('inpMenorCinco').value)
    let maiorSexta = Number(document.getElementById('inpMenorCinco').value)

    let amplitudeSeg = maiorSegunda - menorSegunda
    let amplitudeTer = maiorTerca - menorTerca
    let amplitudeQua = maiorQuarta - menorQuarta
    let amplitudeQui = maiorQuinta - menorQuinta
    let amplitudeSex = maiorSexta - menorSexta
    let mediaAmplitude = (amplitudeSeg + amplitudeTer + amplitudeQua + amplitudeQui + amplitudeSex) / 5

    alert(`>>>Amplitudes da Semana<<<\nSegunda-feira:\n${amplitudeSeg}\nTerça-Feira:\n${amplitudeTer}\nQuarta-Feira\n${amplitudeQua}\nSexta-feira:\n${amplitudeSex}\nMédia semanal:\n${mediaAmplitude}`)

}