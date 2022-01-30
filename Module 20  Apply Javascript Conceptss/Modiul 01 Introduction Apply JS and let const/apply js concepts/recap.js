// VARIABLE JS
var tiem = ('2:22pm');
var bookprice = 150;
var isWhiteColor = false;

// ARRAY
var patners = ['sajid', 'majid', 'nojid', 'kojid'];
var elementCount = patners.length;
console.log(elementCount);
var nojidIndex = patners.indexOf('nojid');
console.log(nojidIndex);
patners.push('sujid');
patners.pop(); 

// CONDITIONALS JS
if(bookprice < 120){
    console.log('I Will Buy this book')
}
else(
    console.log('Mama kiso discount denna mama; apni na mama')
)

// WHILE LOOP
var i = 0;
while(i <= 17){
    console.log(i);
    i++;
}
// FOR LOOP
for(var i = 0; i <= 20; i+= 2){
    console.log(i)
    console.log('hi sokina how are you')
}

// FUNCTION JS

function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return false;
};
var moonStatus = isMoonUp(9)
console.log(moonStatus);

// NOTE

// var onek age use hoito 
// kono var er man jodi bar bar chaing kori taile oikhane var na likha {let} likbo karon late ar man bar bar chaing kora jai
// ar jodi kono kisor man ak bar likbo ar chaing korbona taile oikhane {cons} likbo


// THIS VARIABLE COULD CHAING

let onionPrice = 20;
onionPrice = 30;
onionPrice = 80;
console.log(onionPrice);

// THIS VARIABLE IS NOT CHAING
const name = 'Minhajul Alam Akib'
console.log(name);