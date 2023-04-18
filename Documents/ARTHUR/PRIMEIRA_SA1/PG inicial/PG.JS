let Contas = []
let userTempo, posi

let telefoneUser = document.getElementById('telefone')
let nomeUser = document.getElementById('nome')
let senhaUser = document.getElementById('senha')

function Salvar(){

    Contas = JSON.parse(localStorage.getItem('userSalvo'))

    for(i=0; i < Contas.length; i++){
        if(userTempo == Contas[i].gmails){

            if(telefoneUser.value == null || telefoneUser.value == ""){
                
            }else{
                Contas[i].telefones = telefoneUser.value
                
            }

            if(nomeUser.value == null || nomeUser.value == ""){
                
            }else{
                Contas[i].nomes = nomeUser.value
                
            }
            
            if(senhaUser.value == null || senhaUser.value == ""){
                
            }else{
                Contas[i].senhas = senhaUser.value

            }

        }
    }

    localStorage.setItem('userSalvo', JSON.stringify(Contas))
    perfil()

    document.getElementById('telefone').value = ''
    document.getElementById('telefone').focus()

    document.getElementById('nome').value = ''
    document.getElementById('nome').focus()

    document.getElementById('senha').value = ''
    document.getElementById('senha').focus()
}


function perfil(){

    Contas = JSON.parse(localStorage.getItem('userSalvo'))
    userTempo = localStorage.getItem('nomeTemp')

    for(i=0; i < Contas.length; i++){
        if(userTempo == Contas[i].gmails){

            document.getElementById('informacoes').innerHTML = `Nome: ${Contas[i].nomes}<br>Data de nascimento: ${Contas[i].datas}<br>Gmail: ${Contas[i].gmails}<br>Telefone: ${Contas[i].telefones}`

        }
    }

}



function ambiente(){

    window.open("../cadastro Ambiente/cadAmbiente2.HTML", "_self")

}

function dispositivo(){

    window.open("../cadastro Controlador/cadControlador.HTML", "_self")

}

function Dash(){
    
    window.open("../Dashboard/tela.HTML", "_self")
    
}


let espaços = []
let aparelhos = []


function disposit(){
    espaços = JSON.parse(localStorage.getItem('ambienteSalvo'))

    aparelhos = JSON.parse(localStorage.getItem('controladorSalvo'))

  for(i=0; i < aparelhos.length; i++){

    document.getElementById("textos").innerHTML += `Nome: ${aparelhos[i].nomeControlador.toUpperCase()}<br>`

  }

}


let variavel

function Delet(){
  
  variavel = JSON.parse(localStorage.getItem('logado'))
  
  if(confirm("Deseja sair?")){
    
      variavel = 1
    
      localStorage.setItem('logado', JSON.stringify(variavel))
    
      window.open("../Login/Log.HTML", "_self")

  }else{
    

  }
  

  return
  
}
  