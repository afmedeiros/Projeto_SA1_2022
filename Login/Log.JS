let Contas = []
let gmailTempo, variavel

function LogarNaPagina(){
    
    let nome = document.getElementById('gmail').value

    let senha = document.getElementById('senha').value


    Contas = JSON.parse(localStorage.getItem('userSalvo'))

    for(i=0; i < Contas.length; i++){

        if(nome == Contas[i].gmails && senha == Contas[i].senhas){
            gmailTempo = Contas[i].gmails
            localStorage.setItem('nomeTemp', gmailTempo)
            window.open("../PG inicial/PG.HTML", "_self")

            document.getElementById('gmail').value = ''
            document.getElementById('gmail').focus()

            document.getElementById('senha').value = ''
            document.getElementById('senha').focus()

            variavel = 0
    
            localStorage.setItem('logado', JSON.stringify(variavel))
            
        }else{
            document.getElementById('baixo-esq').innerHTML = `E-mail ou senha incorreto!`
        }

    }
}

function mensag(){

    variavel = JSON.parse(localStorage.getItem('logado'))

    if(variavel == 1){

        document.getElementById('baixo-esq').innerHTML = `Logout realizado!`
        
        variavel = 0
        
        localStorage.setItem('logado', JSON.stringify(variavel))

    }else{
        
    }
}

function cadastrar(){

    window.open("../cadast/cast.HTML", "_self")

}

