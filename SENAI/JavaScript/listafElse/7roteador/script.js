let inputUsuario = document.getElementById("inpUsuario")
let inputSenha = document.getElementById("inpSenha")
let usuario = 'admin'
let senha = '123'

function Login(){

    if (inputUsuario === usuario && inputSenha === senha){
        alert("Login Efetuado com sucesso!")
    }
    else if (inputUsuario === usuario && inputSenha !== senha){
        alert("Senha Incorreta!")
        }
    else if (inputUsuario !== usuario && inputSenha === senha){
        alert("Usuário Incorreto!")

    }

    }