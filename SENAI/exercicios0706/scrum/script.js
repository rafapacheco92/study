// 2) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), arredondando o número para baixo, cadastrar para cada sprint um título e um objetivo.

let dias = prompt('Digite quantos dias terão o projeto:')
let diasSprint = prompt('Digite quantos dias terão cada sprint:')
sprints = Math.floor(dias / diasSprint)
let sprint = 'As sprints serão:\n'

for (i = 0; i < sprints; i++){
    let titulo = prompt('Digite o título da ' + (i+1) + " sprint:")
    let objetivo = prompt('Digite o objetivo da ' + (i+1) + " sprint:")
    sprint += (`${i+1} - ${titulo} e o objetivo é ${objetivo}\n`)  
}

alert(sprint)