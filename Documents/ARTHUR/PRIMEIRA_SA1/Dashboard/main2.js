
const dispositivoSelect2 = document.getElementById("sel2")

Controladores = JSON.parse(localStorage.getItem('controladorSalvo'))

let selectorA = []

i=0



for(nomeControlador in Controladores) {

    let batata2 = `${Controladores[i].nomeControlador}`;
    option = new Option (batata2, nomeControlador);    
    dispositivoSelect2.options[dispositivoSelect2.options.length] = option;
    i++
    

    selector.push(batata2)

    

}


var select2 = document.getElementById('sel2');
select2.addEventListener('change', dispo1);


function dispo1(){
    opop2 = select2.options[select2.selectedIndex].text;
        document.getElementById("dispo2").innerHTML = opop2

              
    for(i=0; i < Controladores.length; i++){

        if(Controladores[i].nomeControlador === opop2){

            document.getElementById('dispo22').innerHTML = `${Controladores[i].ambiente}`
            document.getElementById('dispo23').innerHTML = `${Controladores[i].ambiente}`
            
            
        }else{
            
        }    
    }
   
        document.getElementById("dispo3").innerHTML = 'FREEZER HORIZONTAL'
       
   
    
}


