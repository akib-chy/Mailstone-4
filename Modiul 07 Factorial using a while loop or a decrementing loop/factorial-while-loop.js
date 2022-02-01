// FUNCTION WHILE LOOP

// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i <= number){
//         factorial = factorial * i,
//         i++;
//     }
//     return factorial;
// }
// var firstFactorial = getFactorial(6);
// console.log(firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log(secondFactorial);


// WHILE LOOP REVURS
// function getFactorial(number){
//     let factorial = 1;
//     let i = number;
//     while(i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// var firstFactorial = getFactorial(6);
// console.log(firstFactorial);

// FOR LOOP REVURS
function getFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i
    }
    return factorial;
}
var firstFactorial = getFactorial(6);
console.log(firstFactorial);