//KATA 1 CHEESE CHEESE CHEESE?

function add (a, b) {
    // result = a + b ;
    return a + b ;
}
let result = add (2, 4)
console.log (result)


// // 3. factoryl (n) // n*(n-1)*(n-2)....2*1
// 3 // 3*2*1 =6
// 4// 4*3*2*1=24
// 5 // 5*4*3*2*1= 120

// declaring a variable to keep track of a final result
// writing a WHILE loop to consistently modify the result
// returning the result


// KATA 2 
console.log ("KATAKATAKATAKATA2222222")

function multiply (a, b) {
    let index = 0
    let answer = 0
    while (index <b) {
        answer = add (a, answer)
        index = index +1
    }
    return answer
}
let results = multiply(6,4)
console.log(results)


// KATA 3 POWER/EXPONENT 
console.log ("KATAKATAKATA33333")

function power (x, n) {
    let index = 0
    let answer = 1
    while (index < n) {
        answer = multiply (x, answer)
        index = index + 1
    }
    return answer

}
let expo = power(2,8)
console.log (expo);

// KATA 4 - FACTORIAL
console.log (" -----4--4---4--------------")
function factorial (x) {
    let index = 1
    let answer = 1
    while (index<=x) {
        answer = multiply (index, answer)
        index = index +1
    }
    return answer
}

let cheese = factorial(4);
console.log (cheese);

// KATA BONUS FIBONACCI

console.log (" ---BONUS BONUS---------")
function fibonacci (n) {
    let index = 3
    let anime = 1
    let a = 0
    let b = 1
    while (index <=n) {
        anime = add (a, b)
        index = index +1
        a = b
        b = anime
    }
    return anime
}

let hat = fibonacci (8);
console.log (hat);
