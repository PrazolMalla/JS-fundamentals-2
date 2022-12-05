"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");
*/
// const interface = 'Audio';
// const private = 534;
/*
function logger() {
  console.log("My name is Prazol");
}

//calling /running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1991));

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age2);
