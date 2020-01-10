// //Variables and data type

// let firstName = 'John';
// let lastName = 'Smith';
// let age = 28;
// let fullAge = true;

// //Variable coercion

// let firstName = 'John';
// let age = 28;

// console.log(firstName + age);

// let job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName, 'is a', job);

// //Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ', age, ' year old ', job);

// let lastName = prompt('What is his last name?');
// console.log(lastName);

let markMass = 75;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

markBMI = markMass / Math.pow(markHeight, 2);
johnBMI = johnMass / Math.pow(johnHeight, 2);

console.log("Mark's BMI is higher than John's", markBMI > johnBMI);
