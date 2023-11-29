// TypeScript Tutorial for Beginners by Programming with Mosh on YouTube

// let age: number = 20;

// if (age < 50)
//     age += 10;
// console.log(age)

// ----------------------------------------------
// any type

// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;
// let level;

// function render(document) {
//     console.log(document)
// }

// ----------------------------------------------
// arrays

// let numbers = [] = [];
// numbers.forEach(n => n.);

// ----------------------------------------------
// tuples

// 1, 'Mosh'
// let user: [number, string] = [1, 'Mosh'];
// user.push(1);

// restrict tuples to only 2 values

// ----------------------------------------------
// enums

// const small = 1;
// const medium = 2;
// const large = 3;

// // pascal naming convention
// const enum Size { Small = 1, Medium, Large }; // automatically assigned 0, 1, 2, or can be assigned values

// let mySize: Size = Size.Medium;
// console.log(mySize);

// ----------------------------------------------
// functions

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
    return income * 1.2;
return income * 1.3;
}

// make optional with '?' or give a default value

calculateTax(10_000, 2023)