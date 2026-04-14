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

//Type aliases
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

////////////////////////////////////////////////////////////////////////////////////////////////

interface IStudent {
    name: string,
    age: number,
    enrolled: boolean
};
let newStudent: IStudent = { name: 'Maria', age: 10, enrolled: true };
console.log(newStudent);

/* 
Duck Typing
Duck Typing is a programming concept that tests if an object meets the duck test: "If it walks like a duck and it quacks like a duck, then it must be a duck."
TypeScript uses duck typing for interfaces, meaning that even though you may say a function takes in an argument of interface A, if interface B has the same properties of A, it will also accept B. Interface A is the duck, and Interface B walks and quacks like a duck, so we'll accept it as a duck too.
*/

//Optional and Read only properties
interface Student_2 {
    name: string,
    age: number,
    enrolled: boolean,
    phone?: number, // phone becomes optional
    readonly id: number // id is readonly
};

//Classes
class Student_3 {
    studentGrade: number;
    studentId: number;
    constructor(grade: number, id: number) {
        this.studentGrade = grade;
        this.studentId = id;
    }
}

//Access Modifiers
class Student {
    protected studentGrade: number;
    private studentId: number;
    public constructor(grade: number, id: number) {
        this.studentGrade = grade;
        this.studentId = id;
    }
    id() {
        return this.studentId;
    }
}

class Graduate extends Student {
    studentMajor: string; // public by default
    public constructor(grade: number, id: number, major: string) {
        super(grade, id);
        // this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
        this.studentGrade = grade; // Accessable because parent is protected
        this.studentMajor = major;
    }
}

const myStudent = new Graduate(3, 1234, 'computer science');

console.log(myStudent.id()); //  prints 1234
myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235

//Factory Functions
interface Student_4 {
    name: string;
    age: number
    greet(): void;
}

const studentFactory = (name: string, age: number): Student_4 => {
    const greet = (): void => console.log('hello');
    return { name, age, greet };
}

const std = studentFactory('Hana', 16);
console.log("std::::", std);

//////////////////////////////////////////////////////////////////////////////
//Generics
// Typed Function
const getItem = (arr: number[]): number => {
    return arr[1];
}

// Generic Function
const getGenericItem = <T>(arr: T[]): T => {
    return arr[1];
};

getItem([1, 2, 3]); // Implicitly typed as number 

getGenericItem<number>([1, 2, 3]); // Explicitly typed as a number

const myFunc = async (): Promise<void> => { // do stuff 
};
