console.log("hello world");

let word = prompt("Scrivi una parola")

console.log(word);

let reverseWord = word.split('').reverse().join('') //split divide la stringa in un array di caratteri, reverse ribaltà l'ordine dei caratteri della stringa, join riunisce i caratteri senza spaziature 

console.log(reverseWord);

if (word === reverseWord) { // verifica l'uguaglianza tra word e reverseWord
    console.log("è una parola palindroma");
} else {
    console.log("Mi dispiace non è palidroma");
}
