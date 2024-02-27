console.log("hi world");

let oddEven = prompt("Scegli pari o dispari")

let userNumber = parseInt(prompt("Scegli un numero da uno a cinque"))

let desktopNumber = parseInt(Math.floor(Math.random() * 5) + 1)

console.log(oddEven, userNumber, desktopNumber);

let sum = userNumber + desktopNumber

if (sum % 2 === 0) {
    console.log("Il numero è pari");
} else {
    console.log("Il numero è dispari");
}