// // FACTORIAL JS
// var factorial = 1;
// for(var i = 1; i <= 5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

// FUNCTION FACTORIAL JS

// function getfactorial(number){
//     var factorial = 1;
//     for(var i = 1; i <= number ; i ++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var number = 7;
// var firstFactorial = getfactorial(number);
// console.log('the 7 factorial number' ,firstFactorial);
// var number = 4;
// var secondFactorial = getfactorial(number);
// console.log('the 4 factorial number', secondFactorial);

function getfactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const firstFactorial = getfactorial(7);
console.log( firstFactorial);

const secondFactorial = getfactorial(9);
console.log(secondFactorial);