const number = 51;
const reminder = number % 2;
console.log(reminder == 0); 

function isEven(myNumber){
    if(myNumber % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 18053;
const isMyNumverEven = isEven(myNumber);
console.log(isMyNumverEven);

const herNumber = 50;
const herNumberEven = isEven(herNumber);
console.log(herNumberEven);

// IS PDD NUMBRT
function isOdd(isnumber){
    if(isnumber % 2 != 0){
        return true;
    }
    return false;
}
const isnumber = 40;
const isNumberOdd = isOdd(isnumber);
console.log(isNumberOdd);