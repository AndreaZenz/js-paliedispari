// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 

var numeroDa1A5 = parseInt(prompt("inserisci un numero da 1 a 5"))

if (numeroDa1A5 >= 6 || isNaN(numeroDa1A5)) {   //perché non funziona isNaN?
    alert("Il numero inserito è sbagliato ")
} else {
    console.log(numeroDa1A5)
    
    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    
    var random = numeroRandom(1, 5)
    console.log(random)
    
    // Sommiamo i due numeri
    
    var somma = random + numeroDa1A5
    console.log(somma)
    
    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    
    // Dichiariamo chi ha vinto.
    document.getElementById("pari-dispari").innerHTML = "il numero inserito è " + numeroDa1A5 + " , il numero generato random dal computer è " + random + " la somma dei due numeri genera un numero " + pariOdispari(somma)
}    


function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariOdispari(numero){
    if (numero % 2 == 0){
        return "pari";
    } else {
        return "dispari";
    }
}
