let vetor = []
let vetorAdd


vetor = JSON.parse(localStorage.getItem('vetorSalvo')) // puxa as informações do localStorage, para depois adicionar novos itens e substituir o antigo, verificar se possui algum dado já salvo.

if (vetor == null){

    vetor = []

    vetorAdd = prompt('Digita o nome: ')
    vetor.push(vetorAdd)
    
    localStorage.setItem('vetorSalvo', JSON.stringify(vetor))

}else{
    
    vetorAdd = prompt('Digita o nome: ')
    vetor.push(vetorAdd)
    
    localStorage.setItem('vetorSalvo', JSON.stringify(vetor))

}