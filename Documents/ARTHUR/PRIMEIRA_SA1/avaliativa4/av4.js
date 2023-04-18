//Criação de uma página WEB, onde será possível realizar o cadastro de produtos de uma loja (nome, marca e valor), alterar o valor de um 
//produto, deletar um produto e apresentar a lista dos produtos para os clientes, na página.
// Tudo isso deverá ser realizado em uma única página.

// Itens obrigatórios:

// - Criação de um array de objetos para armazenar os produtos. Deverá ser armazenados dentro do LocalStorage com a chave "produtosLoja". (3,0) - OK
// - Criação da página HTML para apresentar / alterar / cadastrar / deletar os produtos. (2,0)
// - Função para listar os produtos. (1,0)
// - Função para alterar o valor de um produto, deverá buscar cada produto pelo seu nome. (2,0)
// - Função para deletar um produto. (1,0)
// - Função para cadastrar um produto. (1,0)





let nomeProduto = document.getElementById("nome")
document.getElementById('nome').value = ''
document.getElementById('nome').focus()

let marcaProduto = document.getElementById("marca")
document.getElementById('marca').value = ''
document.getElementById('marca').focus()

let valorProduto = document.getElementById("valor")
document.getElementById('valor').value = ''
document.getElementById('valor').focus()




let Produtos = []

function CadastraProduto(){

    document.getElementById('dir-baixo').innerHTML = ''

    Produtos = JSON.parse(localStorage.getItem('produtosLoja'))

    if(Produtos == null){

        Produtos = []

        Cadast()

    }else{

     Cadast()

    }

    
}

function Cadast(){

    let objProdutos = {

        nome: '',
        marca: '',
        valor: '',
       
        
    }

    objProdutos.nome = nomeProduto.value

    objProdutos.marca = marcaProduto.value

    objProdutos.valor = valorProduto.value

    
    Produtos.push(objProdutos)

    localStorage.setItem('produtosLoja', JSON.stringify(Produtos))

    document.getElementById('nome').value = ''
    document.getElementById('nome').focus()
    document.getElementById('marca').value = ''
    document.getElementById('marca').focus()
    document.getElementById('valor').value = ''
    document.getElementById('valor').focus()

}

function ListaProduto(){

    document.getElementById('dir-baixo').innerHTML = ''

    Produtos = JSON.parse(localStorage.getItem('produtosLoja'))
   
    for(i=0; i < Produtos.length; i++){
        
            document.getElementById('dir-baixo').innerHTML += `Nome: ${Produtos[i].nome} Marca: ${Produtos[i].marca} Valor: R$${Produtos[i].valor}<br><br>`

        
    }
    document.getElementById('nome').value = ''
    document.getElementById('nome').focus()
    document.getElementById('marca').value = ''
    document.getElementById('marca').focus()
    document.getElementById('valor').value = ''
    document.getElementById('valor').focus()

}

function DeletaProduto(){

    Produtos = JSON.parse(localStorage.getItem('produtosLoja'))         
    for(i=0; i < Produtos.length; i++){

        if(Produtos[i].nome === nomeProduto.value){

            
            Produtos.splice(i,1)
            localStorage.setItem('produtosLoja', JSON.stringify(Produtos))
            document.getElementById('dir-baixo').innerHTML = 'Produto deletado'
            
            
        }else{
            document.getElementById('dir-baixo').innerHTML = 'Produto não localizado'
        }    
    }
    document.getElementById('nome').value = ''
    document.getElementById('nome').focus()
    document.getElementById('marca').value = ''
    document.getElementById('marca').focus()
    document.getElementById('valor').value = ''
    document.getElementById('valor').focus()
}


function AlteraProduto(){

    Produtos = JSON.parse(localStorage.getItem('produtosLoja'))
    for(i=0; i < Produtos.length; i++){

        if(nomeProduto.value === Produtos[i].nome){

            Produtos[i].valor = valorProduto.value
            
            localStorage.setItem('produtosLoja', JSON.stringify(Produtos))
            document.getElementById('dir-baixo').innerHTML = 'Valor alterado!'

            
            
        }else{
            document.getElementById('dir-baixo').innerHTML = 'Produto não localizado!'
        }   
    }
    document.getElementById('nome').value = ''
    document.getElementById('nome').focus()
    document.getElementById('marca').value = ''
    document.getElementById('marca').focus()
    document.getElementById('valor').value = ''
    document.getElementById('valor').focus()
}



