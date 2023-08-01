// 7) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

// ======== MENU ========
// 1- Cadastrar nome
// 2- Excluir um nome
// 3- Editar um nome
// 4- Pesquisar se um nome está cadastrado
// 5- Listar todos os nomes cadastrados
// 0- Sair do programa

let nomes = []
let opcao


opcao = Number(prompt('======== MENU ========\n1- Cadastrar nome\n2- Excluir um nome\n3- Editar um nome\n4- Pesquisar se um nome está cadastrado\n5- Listar todos os nomes cadastrados\n0- Sair do programa'))

switch (opcao){

    case 0:
        alert('Programa encerrado...')
        break
    
    case 1:
        let nome = prompt('Digite o nome à ser cadastrado:')
        nomes.push(nome)
        alert('Nome cadastrado!')
        break
    
    case 2:
        let nomeExcluir = prompt('Digite o nome à ser excluído:')
        let posExcluir = nomes.indexOf(nomeExcluir) 
        nomes.splice(posExcluir, 1)

        alert('Nome excluído com sucesso')
        break

    case 3:
        let nomeEditar = prompt('Digite o nome à ser editado:')
        let nomeEditado = prompt('Digite o nome à ser inserido:')
        let posEditar = nomes.indexOf(nomeEditar)
        nomes[posEditar] = nomeEditado
        break

    case 4:
        let nomePesquisa = prompt('Digite o nome que você quer pesquisar:')
        let posPesquisa = nomes.indexOf(nomePesquisa)

        if (posPesquisa >= 0){
            alert('O nome já está cadastrado.')
        } else {
            alert('Não existe cadastro com esse nome.')
        }
        break

    case 5:
        alert(nomes)
        break

    default:
    alert('Resposta inválida.')
}while (opcao != 0){

    opcao = Number(prompt('======== MENU ========\n1- Cadastrar nome\n2- Excluir um nome\n3- Editar um nome\n4- Pesquisar se um nome está cadastrado\n5- Listar todos os nomes cadastrados\n0- Sair do programa'))

switch (opcao){

    case 0:
        alert('Programa encerrado...')
        break
    
    case 1:
        let nome = prompt('Digite o nome à ser cadastrado:')
        nomes.push(nome)
        alert('Nome cadastrado!')
        break
    
    case 2:
        let nomeExcluir = prompt('Digite o nome à ser excluído:')
        let posExcluir = nomes.indexOf(nomeExcluir) 
        nomes.splice(posExcluir, 1)

        alert('Nome excluído com sucesso')
        break

    case 3:
        let nomeEditar = prompt('Digite o nome à ser editado:')
        let nomeEditado = prompt('Digite o nome à ser inserido:')
        let posEditar = nomes.indexOf(nomeEditar)
        nomes[posEditar] = nomeEditado
        break

    case 4:
        let nomePesquisa = prompt('Digite o nome que você quer pesquisar:')
        let posPesquisa = nomes.indexOf(nomePesquisa)

        if (posPesquisa >= 0){
            alert('O nome já está cadastrado.')
        } else {
            alert('Não existe cadastro com esse nome.')
        }
        break

    case 5:
        alert(nomes)
        break

    default:
    alert('Resposta inválida.')
}
}