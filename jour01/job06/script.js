// fizzbuzz

function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(); // Permet d'afficher le script dans la console