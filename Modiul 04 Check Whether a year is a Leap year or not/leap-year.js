// LEAP YEAR

function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    return false;
}
const year = 2024;
const leapYear = isLeapYear(year);
console.log('This is leap year', leapYear);