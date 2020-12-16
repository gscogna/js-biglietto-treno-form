// generatore di classe
var crea = document.getElementById("genera");
// stesso id METTO tutto dentro
genera .addEventListener('click',
function() {

  // utilizzo value al posto innerhtml
  // tra parentesi ID elemento
  var nome = document.getElementById('nome').value;
  var distanza = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;


  // facendo direttamente l operazione sotto if evitiamo di dare variabili a 2 costobiglietto
  var prezzo = distanza * 0.21;
  var messaggio = 'Tariffa Standard';

  if (eta == "minore"){
    prezzo -= prezzo * 0.2;
    messaggio = 'Sconto minorenne';
    // se sono solo due va bene else if
  } else if( eta == "over"){
    prezzo -= prezzo * 0.4;
    messaggio = 'Sconto Silver';
  }

  //prendo da ID
  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = messaggio;
  // generatore da 1 a 10
  document.getElementById('carrozza').innerHTML = Math.floor((Math.random()*9) +1);
  // generatore da 1 a 1000
  document.getElementById('codiceCp').innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;
  // costo fino a centesimi di euro
  document.getElementById('costo').innerHTML = prezzo.toFixed(2) + " €";
  //prendo classe show dall html css e lo do a biglietto
  document.getElementById('biglietto').className = 'show' ;
});

// basta aggiungere apici vuoti e sovrascrivo
var cancella = document.getElementById("annulla");

cancella.addEventListener('click',
function() {
  document.getElementById('nome-passeggero').innerHTML = '';
  document.getElementById('offerta').innerHTML = '' ;
  document.getElementById('carrozza').innerHTML = '' ;
  document.getElementById('codiceCp').innerHTML = '' ;
  document.getElementById('costo').innerHTML = '' ;
  document.getElementById('nome').value = '' ;
  document.getElementById('km').value = '' ;
  document.getElementById('eta').value = '' ;

  //prendo classe hidden dall html css e lo do a biglietto
  document.getElementById('biglietto').className = 'hidden';
});
