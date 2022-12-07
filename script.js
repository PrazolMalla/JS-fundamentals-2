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

/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1991));

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age2);
*/

// Arrow function/
/*
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//? coding challenge 1

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins Win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Dolphins Win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `No Result`;
  }
}

console.log(checkWinner(avgDolphins, avgKoalas));
*/

//* Arrays

/*

const friends = ["Anup", "Bigyan", "Bibek", "Daman", "Pritika", "Susan"];

console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(y);

console.log(friends[0]);

console.log(friends.length);

friends[2] = "Jay";

// console.log(friends);

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

*/

//* Basic array operations

//Add element
const friends = ["Anup", "Bigyan", "Bibek", "Daman", "Pritika", "Susan"];
const newLength = friends.push("Jay"); //last
console.log(newLength);
console.log(friends);

friends.unshift("John"); //First
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Pritika"));

console.log(friends.includes("Ram"));
