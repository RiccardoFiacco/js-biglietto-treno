//dichiare costante percentuale sconto u-18
const percentualeScontoU18 = 20;
//dichiarare costante percentuale sconto o-65
const percentualeScontoO65 = 40;
//chidere a utente numero km con prompt
//salvarlo in una variabile
let numeroKm = parseInt(prompt("inserisci il numero di km percorsi"));
console.log(typeof(numeroKm))
//chidere a utente eta con prompt
//salvarlo in una variabile

//calcolare prezzo base biglietto: km * costante 0,21

//SE eta < 18 
    // sconto = prezzo * percentuale u-18 / 100
//ALTRIMENTI se eta > 65 
    // sconto = prezzo * percentuale o-65 / 100

//SE sconto != 0
    //calcolo prezzo finale prezzo-sconto

//prezzo finale