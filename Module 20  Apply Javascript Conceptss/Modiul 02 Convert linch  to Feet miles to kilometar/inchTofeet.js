// AKTA KAJ AKADIKBAR KORTE CAILE FUNCTION DICLAR KORE DIBO

function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}
var myInches = 140;
var feet = inchToFeet(myInches);
console.log('My inches', feet) ;

var dadiInch = 158;
var feet = inchToFeet(dadiInch);
console.log('My dadi Inches', feet);

var naniInch = 167;
var feet = inchToFeet(naniInch)
console.log('My nani Inches', feet);

var nanaInch = 180;
var feet = nanaInch / 12;
console.log(feet);


// MILE TO KM
function mileToKm(mile){
    var km = mile * 1.60934;
    return km;
}
var amerika = 89;
var km = mileToKm(amerika);
console.log(km, 'km');

var vutan = 200;
var km = mileToKm(vutan);
console.log(km);