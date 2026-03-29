//Function types, parameters

//Primitives
let age: number;
age = 12;

let username: string;
username = 'sm';

let isStudent: boolean;
isStudent = true;

//More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string,
    age: number
}

let person: Person;

person = {
    name: 'sm',
    age: 20
}

// person = {
//     isStudent: true
// }

// let people: {
//     name: string,
//     age: number
// }[];
let people: Person[];

//Type inference
let course = 'React course';

let courseUnion: string | number = 'React course';
courseUnion = 12;

//Function and types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) { //returns void
    console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]

// updatedArray[0].split(''); -> because of generics type, it has to be array of numbers. so this will not be allowed