// Selecionando elemento para criar a vitrine principal
const vitrinePrincipal = document.querySelector('.containerListaProdutos ul')

//Selecionando elemento para colocar os produtos no carrinho
const vitrineCarrinho = document.querySelector('.containerCarrinho ul')

// Selecionando elemento, para esconder ou mostrar, a mensagem de produto nao encontrado depois
const produtoNaoEncontrado = document.querySelector('.containerListaProdutos span')

// Selecionando os botoões principais do site
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
const botaoBuscaPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
const botaoMostrarTodosProdutos = document.querySelector('.estiloGeralBotoes--mostrarTodos')

//Selecionando o preço total, para adicionar ao carrinho depois
const totalProdutos = document.querySelector('#precoTotal')

//Seleciona o input do campo de busca
const campoDeBusca = document.getElementsByClassName("campoBuscaPorNome")[0]
 
//Cria o template dos produtos da vitrine
const templateProdutos = ({id,nome,preco,secao,img,componentes}) => {
     
        const li = document.createElement('li')
        const ol = document.createElement('ol')
        const imgProduto = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')
        
		//Cria o botão para adicionar produtos ao carrinho
		const button = document.createElement('button')

        // Adiciona dados do produto aos elementos
        imgProduto.src = img
        imgProduto.alt = nome
        h3.innerText = nome
        p.innerText = `R$ ${preco.replace(".",",")}`
        span.innerText = secao
        button.innerText = "Adicionar ao Carrinho"
        button.setAttribute("data-id", id)

        // Adiciona os elementos para o li
        li.appendChild(imgProduto)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)
        li.appendChild(ol)
        
        // Percorre o array de componentes dos produtos
        for(let i = 0; i < componentes.length; i++){
           
            const liComponentes = document.createElement('li')
            ol.appendChild(liComponentes)  

            const spanComponentes = document.createElement('span')
            liComponentes.appendChild(spanComponentes)

            spanComponentes.innerText = componentes[i]
            
        }
        // Adiciona o botão de adicionar ao carrinho ao elemento pai > li
        li.appendChild(button)
        
        produtoNaoEncontrado.classList.add('produtoNaoEncontradoHide')
         
        return li
}

//--------------------------------------------------------------------------


//Cria as lista dos produtos da vitrine
const montarListaProdutos = (arrayProdutos, callTemplateProdutos, vitrine)=>{
    vitrine.innerHTML = ''
    arrayProdutos.forEach(function(produto) {
       
        const templateProduto = callTemplateProdutos(produto)
        vitrine.appendChild(templateProduto)
        
       
    });   
    
}
montarListaProdutos(produtos, templateProdutos, vitrinePrincipal)

//Escuta o evento do botão adicionar ao carrinho da vitrine
vitrinePrincipal.addEventListener('click', interceptarAcoes)
function interceptarAcoes (event){
    const botaoAdicionarProduto = event.target
    if(botaoAdicionarProduto.tagName === "BUTTON"){
        const idProduto = botaoAdicionarProduto.getAttribute("data-id")
        adicionarProdutoCarrinho(idProduto)
        
    }
   
}
//-------------------------------------------------------------------------

//Cria a função de adicionar produto ao carrinho
let carrinhoCompra = []
function adicionarProdutoCarrinho(idProduto){
    
    const produtoFiltrado = produtos.find((produto)=>produto.id == idProduto)
    carrinhoCompra.push(produtoFiltrado) 
     
    montarListaProdutos(carrinhoCompra, templateProdutos, vitrineCarrinho)
    somarValoresCarrinho(carrinhoCompra) 
}

function somarValoresCarrinho(valor){      
    totalProdutos.innerText = " " + somaTotalProdutos(valor) + ".00"
}
//-------------------------------------------------------------------------

//-------------------SEÇÃO HORTIFRUTI-------------------------------------- 
//Filtra os produtos que são hortifruti
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti'
    })

    montarListaProdutos(listaHortifruti, templateProdutos, vitrinePrincipal)
  
}

// Adicionando event listener de clique, e executando a função de filtro pela seção
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)
//----------------------------------------------------------------------------


//---------------------BUSCA PELO NOME-------------------------------------
//Realiza a busca dos produtos pelo nome, seção e categoria
function buscaPorNome(){
	let pesquisarProdutos = campoDeBusca.value.toLowerCase() 
    
     
    const produtoPeloNome = produtos.filter((produto) =>{
        //Verifica as condições para que a busca retorne para os nomes dos produtos, seção e categoria
        
        if(pesquisaSemAcento(produto.nome).toLowerCase().includes(pesquisarProdutos)){
           
            return produto.nome
        }
        
        if(pesquisaSemAcento(produto.secao).toLowerCase().includes(pesquisarProdutos)){
            return produto.secao
        }

        if(pesquisaSemAcento(produto.categoria).toLowerCase().includes(pesquisarProdutos)){
            return produto.categoria
        } 
		
        else{
            MensagemProdutoNaoEncontrado(pesquisarProdutos)
   		}
	 
	})
 
    montarListaProdutos(produtoPeloNome, templateProdutos, vitrinePrincipal)
    
}

// Intercepta o event listener de clique, e executa a função de filtro pelo nome
botaoBuscaPorNome.addEventListener('click', buscaPorNome)

// Intercepta o event da tecla Enter e executa a função de filtro pelo nome
campoDeBusca.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        buscaPorNome()
    }
})

//--------------------MOSTRA TODOS OS PRODUTOS--------------------------
//Mostra Todos os Produtos do site 
function mostrarTodosProdutos(){
     
    const mostrarProdutos = produtos.filter((produto) => {
        return produto.secao
    })
    montarListaProdutos(mostrarProdutos, templateProdutos, vitrinePrincipal)
    
}
 
botaoMostrarTodosProdutos.addEventListener('click', mostrarTodosProdutos)

//---------------------------------------------------------------


// Realiza a soma de quaisquer produtos
function somaTotalProdutos(valorProduto) {
    let somaTotal = 0;

    for(let i = 0 ; i < valorProduto.length ; i++) {
      somaTotal += parseInt(valorProduto[i].preco)
    } 
    
    return somaTotal
}

//Função que remove a mensagem de produto nao encontrado, para outras áreas do site
function MensagemProdutoNaoEncontrado(msgPesquisaProdutos){
    produtoNaoEncontrado.classList.add('produtoNaoEncontrado')
 
    //Mostra uma mensagem de produto nao encontrado, para pesquisas vazias
    if(msgPesquisaProdutos === ''){
        
        produtoNaoEncontrado.classList.remove('produtoNaoEncontradoHide')
        produtoNaoEncontrado.innerText = "Nenhum produto corresponde a sua pesquisa"
        document.querySelector(".campoBuscaPorNome").placeholder = "Digite algo para pesquisar"
        
    }
    else{
    //Mostra uma mensagem caso nao encontre o produto, para pesquisas não vazias
    produtoNaoEncontrado.classList.remove('produtoNaoEncontradoHide')
    produtoNaoEncontrado.innerText = `O produto "${msgPesquisaProdutos}" não se encontra em nosso sistema`
    }
   
}

 function pesquisaSemAcento(str){
    
        str = str.replace(/[ã]+/g, "a")
        str = str.replace(/[ç]+/g, "c")
		return str
	
}
	
// Made by - Lucas Paulus



