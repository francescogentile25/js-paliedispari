// const userWord = prompt('iserisci una parola o una frase  e ti dirò se è palindorma')
// // console.log (userWord)



// const result = palindorma(userWord);

// console.log(result)
// if(result===true){
//     console.log('È palindroma')
// }else{
//     console.log('Non è palindroma')
// }

// function palindorma(word) {
//     const splitWord = word.split('')
//     // console.log(splitWord)
//     const splitWordUnit = splitWord.join()
//     // console.log(splitWordUnit)
//     const reverseWord = (splitWord.reverse())
//     // console.log(reverseWord)
//     const reverseWordUnit = reverseWord.join()
//     return splitWordUnit === reverseWordUnit;
//     // console.log(reverseWordUnit)
// }


// l’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Comunichiamo all’utente chi ha vinto. (decidete voi come)


let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
// console.log(userNumber)
document.getElementById('userNumber').innerHTML = 'Il tuo numero è ' + userNumber;
while (userNumber >5){
    userNumber = parseInt(prompt('Ti ho detto massimo 5'));
}

const choiceUser = prompt('Scegli pari o dispari')
document.getElementById('choiceUser').innerHTML = 'Hai scelto ' + choiceUser;
let choice
if (choiceUser === 'pari') {
    choice = 0;
} else if (choiceUser === 'dispari') {
    choice = 1;
}


const pcNumber = computerChoice()
document.getElementById('pcNumber').innerHTML = 'Il numero del pc è ' + pcNumber;
const somma = sum (userNumber, pcNumber)
document.getElementById('sum').innerHTML = 'La vostra somma è ' + somma;

if (isEven(somma) === choice) {
    console.log('Hai vinto!');
    // document.getElementById('result').innerHTML = 'Hai vinto';
} else {
    document.getElementById('result').innerHTML = 'Hai perso';
    // console.log('Hai perso.');
}
/******
FUNZIONI
*******/
// funzione numero random
function computerChoice() {
    return Math.floor(Math.random() * 5) + 1;
}

// funzione somma
// console.log(somma)
function sum (num1, num2){
    return num1+ num2
}
//funzione pari 
function isEven (val){
    return val % 2 === 0;
}

