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
let constNumber = '';

const myTemplate = document.getElementById('mySquare');


for (let i = 1; i <= 100; i++) {
    const number = i;

   

    if (number % 3 === 0 && number % 5 === 0) {
        constNumber = number + "FizzBuzz";
        myTemplate.innerHTML += `<div class="square-content d-flex justify-content-center align-items-center">
        <div  class="square bg-red">
            fizzBuzz
        </div>  
        </div>`;

    } else if (number % 3 === 0) {
        constNumber = number + "Fizz";
        myTemplate.innerHTML += `<div class="square-content d-flex justify-content-center align-items-center">
        <div  class="square bg-green">
            fizz
        </div>  
        </div>`;

    } else if (number % 5 === 0) {
        constNumber = number + "Buzz";
        myTemplate.innerHTML += `<div class="square-content d-flex justify-content-center align-items-center">
        <div  class="square bg-yellow">
            buzz
        </div>  
        </div>`;
    } else {
        constNumber = number;
        myTemplate.innerHTML += `<div class="square-content d-flex justify-content-center align-items-center">
        <div  class="square bg-blue">
           ${constNumber}
        </div>  
        </div>`;
    }
    console.log(constNumber);
}


//aggiunto number per verificare da console che il risultato sia corretto


