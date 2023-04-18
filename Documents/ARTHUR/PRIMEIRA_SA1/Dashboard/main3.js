
const dispositivoSelect3 = document.getElementById("sel3")

Controladores = JSON.parse(localStorage.getItem('controladorSalvo'))

let selectorB = []

i=0

for(nomeControlador in Controladores) {

    let batata3 = `${Controladores[i].nomeControlador}`;
    option = new Option (batata3, nomeControlador);    
    dispositivoSelect3.options[dispositivoSelect3.options.length] = option;
    i++

    selector.push(batata3)

    

}
