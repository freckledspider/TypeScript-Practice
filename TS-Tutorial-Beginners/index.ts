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

// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//     return income * 1.2;
// return income * 1.3;
// }

// // make optional with '?' or give a default value

// calculateTax(10_000, 2023)

// ----------------------------------------------
// objects

// let employee:  {
//     readonly id: number,
//     name?: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1, 
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date)
//     } };

// ----------------------------------------------
// advanced types

// type Employee = {
//     readonly id: number,
//     name?: string,
//     retire: (date: Date) => void
    
// }

// let employee: Employee = { 
//     id: 1, 
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date)
//     } };

// union types

// function kgToLbs(weight: number | string): number {
//     // narrowing
//     if (typeof weight === 'number') 
//         return weight * 2.2;
//         else {
//             return parseInt(weight) * 2.2;
//         }
//     };

// kgToLbs(10);
// kgToLbs('10kg');

// intersection types

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// literal types

// literal (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';

// nullable types

// function greet(name: string | null | undefined) {
//     if (name)
//     console.log(name.toUpperCase())
// else
//     console.log('Hola')
// }

// greet(undefined);

// ----------------------------------------------
// optional chaining

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(1);
// optional property access opeator
    console.log(customer?.birthday?.getFullYear())

// optional element access operator
// customers?.[0]

// optional call

let log: any = null;
log?.('a');

