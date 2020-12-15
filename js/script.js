// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.



var nome = document.getElementById('nome').value;
var km = document.getElementById('kilometri').value;
var eta = document.getElementById('eta').value;



var costoBiglietto = km * 0.21;
var tariffa = 'tariffa standard';


if (eta == 'minorenne'){

    costoBiglietto =  costoBiglietto - km * 20/100;
    tariffa = 'sconto minorenne';

}else if{(eta == 'over' )

    costoBiglietto =  costoBiglietto - km * 40/100;
    tariffa = 'sconto silver';

}


// inserire dati input
document.getElementById('passeggero-name').innerHTML = nome;

document.getElementById('tipo-offerta').innerHTML = tariffa;

document.getElementById('carrozza').innerHTML =
Math.floor(Math.random( ) * 9) + 1;

document.getElementById('codice-cp').innerHTML =
Math.floor(Math.random( ) * 6000) + 1;
}

document.getElementById('costo').innerHTML =
costoBiglietto.tofixed(2) + ' €';
