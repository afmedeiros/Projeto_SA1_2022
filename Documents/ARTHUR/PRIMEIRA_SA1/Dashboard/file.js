let entradaAnalogica, entradaDigital
const tAtualizacao = 500;
const tAtualizacao2 = 2000;
// Armazena a url onde roda a aplicação
url = "http://192.168.0.104"

// Função que lê o valor do input e envia para a placa (estrutura: ip/rota?variavel=valor)
function enviaAnalogica() {
  var valor = document.getElementById("saidaAnalogica").value;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + "/saidaAnalogica?input1=" + valor, true);
  xhttp.send();
}



let operacional = 0
operacional = JSON.parse(localStorage.getItem('ambienteON'))



setInterval(rafaTeste, tAtualizacao);
// Função acionada pelo botão que envia para a placa um comando (estrutura: ip/rota)
function clickOn() {
  if(opop2 == null || opop2 == ""){
    document.getElementById("saidaDigital").innerHTML = "SELECIONE O DISPOSITIVO"
  }else{
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + "/saidaDigital/on", true);
  xhttp.send();
  operacional=1;
  localStorage.setItem('ambienteON', JSON.stringify(operacional));
  if(operacional==1){
    document.getElementById("saidaDigital").innerHTML = "DISPOSITIVO ATIVO"
    
  }
  
}
}

if(operacional==1){
  document.getElementById("saidaDigital").innerHTML = "DISPOSITIVO ATIVO"
}else{
  document.getElementById("saidaDigital").innerHTML = "SELECIONE O DISPOSITIVO"
  document.getElementById("saidaDigital2").innerHTML = "SELECIONE O DISPOSITIVO 2"
}

let rafa=10.4
let maxTemp=0
let minTemp=100
function rafaTeste(){
  if(operacional==1){
  rafa=rafa+1
  document.getElementById("entradaAnalogicaX").innerHTML = rafa;
  if(rafa>maxTemp){
    maxTemp=rafa
    document.getElementById("tempeMax").innerHTML = `${maxTemp}`;
  }
  if(rafa<minTemp){
    minTemp=rafa
    document.getElementById("tempeMin").innerHTML = `${minTemp}`;
  }

  if (rafa>30){
    rafa=10.4
  }
}else{}
}







// Igual a anterior, apenas altera a rota
function clickOff() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + "/saidaDigital/off", true);
  xhttp.send();
  operacional=0;
  localStorage.setItem('ambienteON', JSON.stringify(operacional));
  if(operacional==0){
    document.getElementById("saidaDigital").innerHTML = "DISPOSITIVO DESLIGADO";    
  }
  
  
}

// A cada 0,5 segundos solicita um valor da placa (estrutura: ip/rota)
// A placa responde com um valor (this.responseText), simulando valor analógico, que é lido pela função interna
function recebeAnalogica() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      entradaAnalogica = this.responseText;
      document.getElementById("entradaAnalogica").innerHTML = entradaAnalogica;
      console.log(`EA: ${entradaAnalogica}`);
    }
  };
  xhttp.open("GET", url + "/entradaAnalogica", true);
  xhttp.send();
  

}





setInterval(recebeAnalogica, tAtualizacao);




setInterval(recebeAnalogica, tAtualizacao); // chama a função de leitura a cada tAtualizacao milissegundos

// Igual a anterior, só que o valor retornado é "on" ou "off" (simulando valor digital)
function recebeDigital() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      entradaDigital = this.responseText;
      document.getElementById("entradaDigital").innerHTML = entradaDigital;
      console.log(`ED: ${entradaDigital}`);
    }
  };
  xhttp.open("GET", url + "/entradaDigital", true);
  xhttp.send();
}

setInterval(recebeDigital, tAtualizacao); // chama a função de leitura a cada tAtualizacao milissegundos


//TENTANDO SALVAR DADOS PRA RELATORIO{
//  ( let vetorTemp = []
// let vetorData = []
// minuto--
// vetorTemp=entradaAnalogica
//   localStorage.setItem('temperatura', JSON.stringify(vetorTemp));
//   vetorData = Date();
//   localStorage.setItem('data', JSON.stringify(vetorData)); 
//   vetorTemp=entradaAnalogica
//   localStorage.setItem('temperatura', JSON.stringify(vetorTemp));
//   vetorData = Date();
//   localStorage.setItem('data', JSON.stringify(vetorData));
//   vetorTemp.push(entradaAnalogica) 
//   vetotData.push(Date()) 
//  )

function relatorioGeral(){

  for(i=0; i<vetorTemp.length; i++){
     document.getElementById("textos55").innerHTML += `${vetorData} eee ${vetorTemp}<br>`
  }

  
  



}