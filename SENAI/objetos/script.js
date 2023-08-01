let database = []


function cadastrar(){
    let dinossauro = {
        especie: document.getElementById('inpEspecie').value,
        altura: document.getElementById('inpAltura').value,
        comprimento: document.getElementById('inpComprimento').value,
        peso: document.getElementById('inpPeso').value
    }

    database.push(dinossauro)
    console.log(database)

    limparInputs()

    
}

function limparInputs(){
    document.getElementById('inpEspecie').value = ''
    document.getElementById('inpAltura').value = ''
    document.getElementById('inpComprimento').value = ''
    document.getElementById('inpPeso').value = '' // zerar os valores dos inputs

    document.getElementById('inpEspecie').focus()
}

function pesquisar(){

    let procurado = document.getElementById('inpEspecie').value

    for(i = 0; i < database.length; i++){
        if (database[i].especie == procurado){
            document.getElementById('inpAltura').value = database[i].altura
            document.getElementById('inpComprimento').value = database[i].comprimento
            document.getElementById('inpPeso').value = database[i].peso
        }
    }
}


document.getElementById('inpEspecie').focus() // direciona o cursor no input automaticamente ao abrir a página