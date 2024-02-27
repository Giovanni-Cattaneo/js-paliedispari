// console.log("hello world");

// let word = prompt("Scrivi una parola")

// console.log(word);

// let reverseWord = word.split('').reverse().join('') //split divide la stringa in un array di caratteri, reverse ribaltà l'ordine dei caratteri della stringa, join riunisce i caratteri senza spaziature 

// console.log(reverseWord);

// if (word === reverseWord) { // verifica l'uguaglianza tra word e reverseWord
//     console.log("è una parola palindroma");
// } else {
//     console.log("Mi dispiace non è palidroma");
// }

let inputWord = prompt("Scrivi una parola")

function findPalindrome(inputWord) {
    

    let reverseWord = inputWord.split('').reverse().join('')

    let palindrome = "è una parola palindroma"
    let notPalindrome = "non è una parola palindroma"

    if (inputWord === reverseWord) { // verifica l'uguaglianza tra word e reverseWord
        return palindrome
    } else {
        return notPalindrome
    }

}

console.log(findPalindrome(inputWord));





