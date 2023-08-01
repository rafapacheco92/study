// 2) Um determinado clube de futebol pretende classificar seus atletas em categorias e para isto ele contratou um programador para criar um programa que executasse esta tarefa. Para isso o clube criou uma tabela que continha a faixa etária do atleta e sua categoria. A tabela está demonstrada abaixo:

// IDADE CATEGORIA

// De 05 a 10 Infantil
// De 11 a 15 Juvenil
// De 16 a 20 Junior
// De 21 a 25 Profissional

// Criar um programa que pergunte o nome e a idade do atleta, e que mostre qual a categoria que ele pertence.

let idade = prompt('Digite a idade do atleta:')

switch(true){

    case (idade >= 5 && 10 >= idade) :

    alert(`O atleta é da categoria infantil.`)
    break

    case (idade > 10 && 15 >= idade) :

    alert(`O atleta é da categoria juvenil.`)
    break
    
    case (idade > 15 && 20 >= idade) :

    alert(`O atleta é da categoria junior.`)
    break

    case (idade > 20 && 25 >= idade) :

    alert(`O atleta é da categoria profissional.`)
    break

    default:

    alert('Idade Inválida')

}