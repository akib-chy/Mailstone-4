// // VARIABLE JS

var myName = ('Minhajul Alam');
const myName = ('Minhajul Alam');

let myName = ('Minhajul Alam'); //STRING DATA TYPE
let myNumber = 224; // NUMBER DATA TYPE
myNumber = 100;
myNumber = 20;
let other = true; // BOOLEAN DATA TYPE
console.log(typeof other);


// // ARRAY JS

let coligName = ['akib', 'siam', 'alif', 'asif', 'samir'];
let element = coligName.length;
let asifIndex = coligName.indexOf('asif');
coligName.push('eshan');
coligName.pop();

// CONDITIONAL JS
if(myNumber <= 150 ){
    console.log('I will buy this book')
}
else{
    console.log('Tor kopale boi nai')
}

// WHILE LOOP

let i = 0;
while(i <= 20){
    console.log('amar nam jirina.');
    console.log(i);
    i++ //MOST IMPORTANT
}

// FOT LOOP JS

for(let i = 0; i <= 14; i++){
    console.log(i);
    console.log('ami mori khabo')
};

// FUNCTION JS
function myFavNum(number){
    if(number >= 19 && number <= 5){
        return true;
    }
    return false;
}
let number = 9;
let monStatus = myFavNum(number);
console.log(monStatus);



let  student1 = [20, 50, 30, 40, 80];
let  student2 = [20, 50, 30, 40, 81];
let  student3 = [20, 50, 30, 40, 82];


function totalMarks(studentNumber){
    let totalNumber = 0;
    for(let i = 0; i < studentNumber.length; i++){
        totalNumber += studentNumber[i];
    }
    return totalNumber;
}

const std1 = totalMarks(student1);
const std2 = totalMarks(student2);
const std3 = totalMarks(student3);
console.log(std1, std2, std3);

let kacaBazar = [20, 50, 70, 60, 80, 70, 30];
let kapor = [400, 250, 145, 316];
let frute = [154, 214, 295, 124, 175];

function totalJinis(totalBazar){
    let totalTaka = 0;
    for(let i = 0; i < totalBazar.length; i++){
        totalTaka += totalBazar[i];
    }
    return totalTaka;
}
const std1 = totalJinis(kacaBazar);
const std2 = totalJinis(kapor);
const std3 = totalJinis(frute);
console.log(std1, std2, std3)

let Myname = 'Minhajul Alam';
let i = 0;

while (i <= 20000) {
    console.log(i);
    console.log(Myname);
    i++;
}

for(let i =0; i<=30; i++){
    console.log(i);
    console.log(Myname);
}

let student1 = [60, 70, 47, 85, 61];
let student2 = [60, 70, 47, 85, 62];
let student3 = [60, 70, 47, 85, 63];

function totalMarks(studentNumber){
    let totalNumber = 0;
    for(let i = 0; i < studentNumber.length; i++){
        totalNumber += studentNumber[i];
    }
    return totalNumber;
}
let std1 = totalMarks(student1);
let std2 = totalMarks(student2);
let std3 = totalMarks(student3);
console.log(std1, std2, std3);