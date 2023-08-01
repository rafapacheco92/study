let produtos = []
let nome = document.getElementById('nome')
let marca = document.getElementById('marca')
let valor = document.getElementById('valor')
let indexItemPesquisa


function cadastrar() {


  let produto = {
    nome: '',
    marca: '',
    valor: ''
  }

  produto.nome = nome.value
  produto.marca = marca.value
  produto.valor = valor.value

  produtos = JSON.parse(localStorage.getItem('produtosLoja'))


  if (produtos == null){

    produtos = []

    produtos.push(produto)
    localStorage.setItem('produtosLoja', JSON.stringify(produtos))

  }else{
    
    produtos.push(produto)
    localStorage.setItem('produtosLoja', JSON.stringify(produtos))

  }
  alert('Produto cadastrado com sucesso!')
  limpaInputs()
}

function pesquisar(){
  let itemPesquisa = nome.value
  let dbProdutos = JSON.parse(localStorage.getItem('produtosLoja'))
  let produto = {
    nome: '',
    marca: '',
    valor: ''
  }

  for (i = 0; i < dbProdutos.length; i++){
    if (dbProdutos[i].nome == itemPesquisa){
      alert('Produto encontrado!')
      nome.value = dbProdutos[i].nome
      marca.value = dbProdutos[i].marca
      valor.value = dbProdutos[i].valor
      indexItemPesquisa = i
    }
}
  let nomesDb = []
  for (i = 0; i < dbProdutos.length; i++){
    nomesDb.push(dbProdutos[i].nome)
}
  if (nomesDb.indexOf(itemPesquisa) == -1){
    alert('Produto não encontrado!')
  }
}

function alterar(){
  
  let dbProdutos = JSON.parse(localStorage.getItem('produtosLoja'))
  let newInfo = {
    nome: '',
    marca: '',
    valor: ''
  }
  newInfo.nome = nome.value
  newInfo.marca = marca.value
  newInfo.valor = valor.value

  dbProdutos.splice(indexItemPesquisa, 1, newInfo)
  dbProdutosString = JSON.stringify(dbProdutos)
  localStorage.setItem('produtosLoja', dbProdutosString)

  alert('Produto alterado com sucesso.')
  limpaInputs()

}


function deletar(){
  let dbProdutos = JSON.parse(localStorage.getItem('produtosLoja'))
  dbProdutos.splice(indexItemPesquisa, 1)
  dbProdutosString = JSON.stringify(dbProdutos)
  localStorage.setItem('produtosLoja', dbProdutosString)

  alert('Produto foi deletado.')
  limpaInputs()

}

function listar(){
  let dbProdutos = JSON.parse(localStorage.getItem('produtosLoja'))
  let divInfos = document.getElementById('recebeInfo')

  if (divInfos.childNodes.length === 0){

  let h1Title = document.createElement('h1')
  let h1Text = document.createTextNode('Lista de Produtos')
  h1Title.appendChild(h1Text)
  divInfos.appendChild(h1Title)

  let tabelaP = document.createElement('table')
  divInfos.appendChild(tabelaP)

  let trh = document.createElement('tr')
  let thNome = document.createElement('th')
  let thNomeText = document.createTextNode('NOME')
  thNome.appendChild(thNomeText)
  trh.appendChild(thNome)
  let thMarca = document.createElement('th')
  let thMarcaText = document.createTextNode('MARCA')
  thMarca.appendChild(thMarcaText)
  trh.appendChild(thMarca)
  let thValor = document.createElement('th')
  let thValorText = document.createTextNode('VALOR')
  thValor.appendChild(thValorText)
  trh.appendChild(thValor)
  tabelaP.appendChild(trh)

  for (i = 0; i < dbProdutos.length; i++){
  
    let tr = document.createElement('tr')

    let tdUm = document.createElement('td')
    let textTdUm = document.createTextNode(dbProdutos[i].nome)
    tdUm.appendChild(textTdUm)
    tr.appendChild(tdUm)

    let tdDois = document.createElement('td')
    let textTdDois = document.createTextNode(dbProdutos[i].marca)
    tdDois.appendChild(textTdDois)
    tr.appendChild(tdDois)

    let tdTres = document.createElement('td')
    let textTdTres = document.createTextNode(dbProdutos[i].valor)
    tdTres.appendChild(textTdTres)
    tr.appendChild(tdTres)
    tabelaP.appendChild(tr)}
  }else{
    // let divInfos = document.getElementById('recebeInfo')
    divInfos.innerHTML = ''

  let h1Title = document.createElement('h1')
  let h1Text = document.createTextNode('Lista de Produtos')
  h1Title.appendChild(h1Text)
  divInfos.appendChild(h1Title)

  let tabelaP = document.createElement('table')
  divInfos.appendChild(tabelaP)

  let trh = document.createElement('tr')
  let thNome = document.createElement('th')
  let thNomeText = document.createTextNode('NOME')
  thNome.appendChild(thNomeText)
  trh.appendChild(thNome)
  let thMarca = document.createElement('th')
  let thMarcaText = document.createTextNode('MARCA')
  thMarca.appendChild(thMarcaText)
  trh.appendChild(thMarca)
  let thValor = document.createElement('th')
  let thValorText = document.createTextNode('VALOR')
  thValor.appendChild(thValorText)
  trh.appendChild(thValor)
  tabelaP.appendChild(trh)

  for (i = 0; i < dbProdutos.length; i++){
  
    let tr = document.createElement('tr')

    let tdUm = document.createElement('td')
    let textTdUm = document.createTextNode(dbProdutos[i].nome)
    tdUm.appendChild(textTdUm)
    tr.appendChild(tdUm)

    let tdDois = document.createElement('td')
    let textTdDois = document.createTextNode(dbProdutos[i].marca)
    tdDois.appendChild(textTdDois)
    tr.appendChild(tdDois)

    let tdTres = document.createElement('td')
    let textTdTres = document.createTextNode(dbProdutos[i].valor)
    tdTres.appendChild(textTdTres)
    tr.appendChild(tdTres)
    tabelaP.appendChild(tr)
  }

}
}



function limpaInputs(){
  nome.value = ''
  marca.value = ''
  valor.value = ''
}