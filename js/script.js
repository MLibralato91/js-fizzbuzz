// *Consegna:*
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5  stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// *Prima di partire a scrivere codice poniamoci qualche domanda:*
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// *Consigli del giorno:*
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

let treeAndFive = '';
let tree = '';
let five = '';

for (let i = 0; i <= 100; i++) {
    const number = i;
    
    if (number % 3 === 0 && number % 5 === 0){
        treeAndFive = number + "Il numero è divisibile per 3 e per 5"
        console.log(treeAndFive);
    }
    if (number % 3 === 0){
        tree = number + "Il numero è divisibile per 3"
        console.log(tree);
    }
    if (number % 5 === 0){
        five = number + "Il numero è divisibile per 5"
        console.log(five);
    }
//aggiunto number per verificare da console che il risultato sia corretto
   

}