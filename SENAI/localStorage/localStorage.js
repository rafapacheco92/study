let idade

idade = Number(prompt('Digite sua idade: '))

localStorage.setItem('idadeSalva', JSON.stringify(idade))


console.log(JSON.parse(localStorage.getItem('idadeSalva')))