// Chiedere all’utente di inserire una parola
var str = prompt("inserisci una parola")



// Creare una funzione per capire se la parola inserita è palindroma


function palindrome(str) {
    // var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase();      //.replace(re, '')
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log("la parola " + str + " non è palindroma")
            return false;
        }
    }
    console.log("la parola " + str + " è palindroma")
    return true;
}
palindrome(str);

