// Primitives: number, string, boolean, null, undefined, symbol
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;
age = 24

let userName: string = 'Rehan';
userName = 'RG';

let isStudent: boolean = true;
isStudent = false;

// More complex types

let hobbies: string[] = ['Sports', 'Cooking'];

// interface
interface Person {
    name: string;
    age: number;
}

// type alias
type PersonType = {
    name: string;
    age: number;
}

let person: Person = {
    name: 'Rehan',
    age: 32
}

let people: Person[] = [
    { name: 'Rehan', age: 32 },
    { name: 'RG', age: 24 }
];

// Type inference
let course: string | number = 'React - The Complete Guide';

course = 1234;

// Functions & types
function subtract(a: number, b: number) {
    return a - b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray); // [-1, 1, 2, 3]

// const problemArray = insertAtBeginning(['a', 'b', 'c'], 4);