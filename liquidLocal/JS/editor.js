let objPost = {nome: '', texto: '',  ingredientes: '', receita: ''}
let ingredientesPost = []
let textoDescricao
let textoReceita
let tituloReceita
let main = document.getElementById('mainId')


function newIngrediente(){
	let clone = document.getElementById('origem').cloneNode(true);
	let destino = document.getElementById('newInputDiv');
	destino.appendChild (clone);
	
    let divClonada = clone.getElementsByTagName('div')
	let labelClonado = clone.getElementsByTagName('label');
	let inputClonado = clone.getElementsByTagName('input');

    for(i = 0; i < divClonada.length; i++){
		divClonada[i].value = '';
	}

	for(i = 0; i < labelClonado.length; i++){
		labelClonado[i].value = '';
	}

    for(i = 0; i < inputClonado.length; i++){
		inputClonado[i].value = '';
	}
	

	
}

function addIngredientes() {
    ingredientesDoInput = document.querySelectorAll('.ingredienteInput')
    textoReceita = document.getElementById('receitaTexto').value
    textoDescricao = document.getElementById('textoDrink').value
    tituloReceita = document.getElementById('nomeDrink').value
    for (i = 0; i < ingredientesDoInput.length; i++){
        ingredientesPost.push(ingredientesDoInput[i].value)
    }
    objPost.nome = tituloReceita
    objPost.texto = textoDescricao
    objPost.ingredientes = ingredientesPost
    objPost.receita = textoReceita

    posts.unshift(objPost)

    for (i = 0; i < posts.length; i++){
        criaPost(posts[i])
    }


}

function criaPost(r){
  
    let articleNewPost = document.createElement('article')
    articleNewPost.setAttribute('class', 'conteudo')
    articleNewPost.setAttribute('aria-labelledby', 'label-introducao')

    let divNewPost = document.createElement('div')
    divNewPost.setAttribute('class', 'introducao')
    divNewPost.setAttribute('id', 'introducao')
    articleNewPost.appendChild(divNewPost)
    
    let tituloPost = document.createElement('h2')
    tituloPost.setAttribute('id', 'label-introducao')
    let textoTituloPost = document.createTextNode(tituloReceita)
    tituloPost.appendChild(textoTituloPost)
    divNewPost.appendChild(tituloPost)
  
    let descricao = document.createElement('p')
    descricao.setAttribute('id', 'texto-conteudo')
    descricao.setAttribute('class', 'textoConteudo')
    let textoDescricaoDrink = document.createTextNode(textoDescricao)
    descricao.appendChild(textoDescricaoDrink)
    divNewPost.appendChild(descricao)
  
    // let listaIngredientesPost = document.createElement('ul')
  
    // for(i = 0; i < r.ingredientes.length; i++){
    //   let item = document.createElement('li')
    //   let textoIngredientes = document.createTextNode(r.ingredientes[i])
    //   item.appendChild(textoIngredientes)
    //   listaIngredientes.appendChild(item)
    // }
    
    // divReceita.appendChild(listaIngredientes)   
    
    let btnNewPost = document.createElement('a')
    descricao.setAttribute('class', 'botao')
    let textoBtn = document.createElement('p')
    let conteudoTextoBtn = document.createTextNode('RECEITA')
    textoBtn.appendChild(conteudoTextoBtn)
    btnNewPost.appendChild(textoBtn)
    divNewPost.appendChild(btnNewPost)

    let divNewPic = document.createElement('div')
    divNewPic.setAttribute('class', 'imagemIntro')

    let newPic = document.createElement('img')
    newPic.setAttribute('src', '../img/posts/superb')
    divNewPic.appendChild(newPic)

    sectionNewPost.appendChild(divNewPost)
    sectionNewPost.appendChild(divNewPic)
    main.appendChild(sectionNewPost)
  
  
  }