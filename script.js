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
/*
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
*/
//? Coding challenge 2

/*
const calcTip = function (billValue) {
  const tip =
    50 <= billValue && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;

  return tip;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);

*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtnam",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Anup", "Bigyan", "Bibek", "Daman", "Pritika", "Susan"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose Between firstName,lastName,age,job and friends"
);
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong Choice");
}

jonas.location = "Portugal";
jonas["twitter"] = "@prazol";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best 
friend is called ${jonas.friends[3]}`);
*/
/*
const jonas = {
  
  firstName: "Jonas",
  lastName: "Schmedtnam",
  birthYear: 1991,
  job: "teacher",
  friends: ["Anup", "Bigyan", "Bibek", "Daman", "Pritika", "Susan"],
  hasDriverLicense: false,
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  calcAge: function () {
    return 2037 - this.birthYear;
  },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  summerierJonas: function () {
    return `${this.firstName} is a ${this.age} old ${this.job},and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.summerierJonas());
*/

//? Coding Challenge 3

const miller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const smith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const higher = function () {
  if (miller.calcBMI() > smith.calcBMI()) {
    return `${miller.firstName}'s BMI (${miller.BMI}) is higher than ${miller.firstName}'s BMI (${smith.BMI})`;
  } else {
    return `${smith.firstName}'s BMI (${smith.BMI}) is higher than ${miller.firstName}'s BMI (${miller.BMI})`;
  }
};

console.log(higher());
