console.log("hi world");

let oddEven = prompt("Scegli pari o dispari")

let userNumber = parseInt(prompt("Scegli un numero da uno a cinque"))

// let desktopNumber = parseInt(Math.floor(Math.random() * 5) + 1)

// console.log(`Hai scelto ${oddEven}`);

// let inputEven = "Hai inserito un numero pari"

// let inputOdd = "Hai inserito un numero dispari"

// if (userNumber % 2 === 0) {
//     console.log(inputEven);
// } else{
//     console.log(inputOdd);
// }

// console.log(userNumber, desktopNumber);

// let sum = userNumber + desktopNumber

// console.log(sum);

// let even = "il risultato della somma è pari"

// let odd = "Il risultato della somma è dispari"
 
// if (sum % 2 === 0) {
//     console.log(even);
// } else {
//     console.log(odd);
// }


// if (sum % 2 === 0 && oddEven == "pari") {
//     console.log("Congratulazioni il numero è pari, hai vinto");
// } else if (sum % 2 === 1 && oddEven == "dispari"){
//     console.log("Congratulazioni hai scelto dispari e hai vinto");
// } else{
//     console.log("Ha vinto il computer, riprova pure");
// }

/**
 * Data la scelta pari o dispari e scelto un numero per l'uente sceglierà un numero tra 1 e 5 per il computer li sommerà e vedrà se il risultato sia pari o dispari annunciando il risultato
 * @param {string} oddEven 
 * @param {number} userNumber 
 * @returns {number}
 */
function oddOrEven(oddEven, userNumber){

    console.log(`Hai scelto ${oddEven}`);

    let desktopNumber = parseInt(Math.floor(Math.random() * 5) + 1)

    let sum = userNumber + desktopNumber

    let inputEven = `Hai inserito un numero pari, ${userNumber}`

    let inputOdd = `Hai inserito un numero dispari, ${userNumber}`

    let inputDesktop = `Il computer ha scelto il numero, ${desktopNumber}`
    
    if (userNumber % 2 === 0) {
        console.log(inputEven);
        console.log(inputDesktop); 
    } else{
        console.log(inputOdd);
        console.log(inputDesktop);
    }

    let even = `il risultato della somma è pari, ${sum}`

    let odd = `il risultato della somma è dispari, ${sum}`


    if (sum % 2 === 0) {
        console.log(even);
    } else {
        console.log(odd);
    }

    if (sum % 2 === 0 && oddEven == "pari") {
        console.log("Congratulazioni il numero è pari, hai vinto");
    } else if (sum % 2 === 1 && oddEven == "dispari"){
        console.log("Congratulazioni hai scelto dispari e hai vinto");
    } else{
        console.log("Ha vinto il computer, riprova pure");
    }
    
    return sum
}

console.log(oddOrEven(oddEven, userNumber))