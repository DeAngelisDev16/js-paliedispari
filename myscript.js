/* Palidroma
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */

//prova funzionamento funzione;
function sommaNumeri (num1, num2){
    const somma = num1 + num2 ;
    return somma;
} //=====> nb: Tutto ciò che sta dopo return non viene eseguito;

//console.log(sommaNumeri (2, 4));

//NB: TUTTE LE VARIABILI UTILIZZATE ALL'INTERNO DI UNA FUNZIONE DEVONO ESSERE STATE DICHIARATE DENTRO ALLA FUNZIONE (IMPORTANTE)!!

function palindromeTrueOrNot (){
    let userWord = prompt('Inserisci una parola');
    for(let i= userWord.length -1 ; i <= userWord.length; i-- ){
        if (userWord = userWord.lenght - 1){
            return true;
        }

    }

}




function oddOrEven (num1, num2){
    let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));

}

oddOrEven()
console.log(oddOrEven());


    





