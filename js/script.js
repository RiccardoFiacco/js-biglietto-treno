//dichiare costante percentuale sconto u-18
const percentualeScontoU18 = 20;
//dichiarare costante percentuale sconto o-65
const percentualeScontoO65 = 40;
//dichiare una costante con il prezzo per km
const prezzoPerKm = 0.21;
//chidere a utente numero km con prompt
//salvarlo in una variabile
let numeroKm = parseInt(prompt("inserisci il numero di km percorsi"));
//chidere a utente eta con prompt
//salvarlo in una variabile
let eta = parseInt(prompt("inserisci la tua eta"));
//calcolare prezzo base biglietto: km * costante 0,21
const prezzoBase = numeroKm * prezzoPerKm;
//inizzializzo la variabile sconto
let sconto = 0; 
//SE eta < 18 
    // sconto = prezzo * percentuale u-18 / 100
//ALTRIMENTI se eta > 65 
    // sconto = prezzo * percentuale o-65 / 100

if(eta<18){
    sconto = prezzoBase * percentualeScontoU18 / 100
}else if(eta > 65){
    sconto = prezzoBase * percentualeScontoO65 / 100
}

let prezzoFinale = prezzoBase - sconto;

console.log("prezzo finale: "+prezzoFinale.toFixed(2));

