//import { Invoice } from "./classes/invoice.js";

// // Arrays and Object

// let names = ["mehdi", "luigi", "yoshi"];

// names.push("marco");

// let mixedType = [1, true, "mehdi"];
// mixedType.push(3);
// mixedType[0] = false;

// // Object

// let myObject = {
//     name: "Mehdi",
//     age: 42,
//     hier: true
// };
// myObject.name = "marco";
// myObject.age = 34;

// myObject = {
//     name: "mmm",
//     age: 3,
//     hier: false
// };

/////////////////////// lesson 4 Explicit & Union Types

// // explicit type
// let character: string;
// let age: number;
// let isLogedIn: boolean;

// age = 2;

// // arrays

// let ninjas: string[] = [];

// ninjas.push("mehdi");

// // union types

// let mixedArray: (string | boolean | number )[] = [];
// mixedArray.push(true);

// let mixeType: string | number;

// // object

// let ninja1: object;

// let ninja2: {
//     name: string,
//     age: number,
//     beltColor: string,
// }

////////////////////////////////// lesson 6 Dynamic ( any ) Types

// let age : any = 25;

// age = true;
// age = "mehdi";

// let mixeyArray: any[] = [];
// mixeyArray.push("MArco");
// mixeyArray.push(23);

// let ninjaArray: {name: any, age: any};

///////////////////////////////////// lesson 7 Better Workflow & tsconfig

// tsc --init Creat Cinfig file 

////////////////////////////////// lesson 8 Function Basics ( & void ) 

// let greet: Function;

// greet = () => {
//     console.log("Hello, world");
// }

// const add = (a: number, b: number, c: number | string = 10 ) => {
//     console.log(a + b);
//     console.log(c);
// }

// add(5, 10, "dd");

// const minus = (a: number, b: number): number => {
//     return a+b;
// }

// let result = minus(10, 7);

// //////////////////////////////////////////////// lesson 9 Type Aliase

// type StringOrNum = string | number;
// type ObjWithName = {name: string, uid: StringOrNum};

// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log("${item} has a uid of ${uid}");
// }

// const greetAgain = ( user: ObjWithName) => {
//     console.log("${user.name} says Hello");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////lesson 9 Function Type Signatures

// let greet : Function;

// example 1
// let greet: (a: string, b: string) => void;

// greet = (name: string, greeting: string) => {
//     console.log("${name} says ${greeting}");
// }

// // example 2

// let calc: (a: number, b. number, c: string) => number;

// calc = (numOne: number, numbTwo: number, action: string): number => {
//     if ( action === "add"){
//         return numOne + numbTwo;
//     }
//     return -1
// } 

// // example 3

// let logDetails: (obj: {name: string, age: number}) => void;

// type person = {name:string, age: number};

// logDetails = (ninja: person) => {
//     console.log("${ninja.name} is ${ninja.age} years old");
// }

//////////////////////////////////////////////////////////////////////////////////////lesson 11 Dom Interaction & Typecasting

/////////////////////////////////////////////////////////////////////////////////////// lessen 12 Classes

//classes

// class Invoice {
//     client: string;
//     details: string;
//     amount: number;

//     // constractur
//     constructor ( c:string, d: string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     // method
//     format () {
//         return "${this.client} owes ${this.amount} for {this.details}";
//     }

// }

// // instansiation von Class Invoice

// const invOne = new Invoice("Mario", "work on the mario webseite", 250);
// const invTwo = new Invoice("Mario", "work on the mario webseite", 250);

// // eine variablen type Invoice[] array nur

// let invoices: Invoice[] = [];
// invoices.push(invOne);

// console.log(invoices);

// invTwo.client = "Mehdi";
// invTwo.details = "udemy";
// invTwo.amount = 19;

///////////////////////////////////////////////////////////////////////////////////////leson 13 Public Private & Readonly
// to change acces on object in a class use public private or read only

// class Invoice {
//     readonly client: string;
//     private details: string;
//     public amount: number;

//     // constractur
//     constructor ( c:string, d: string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     // method
//     format () {
//         return "${this.client} owes ${this.amount} for {this.details}";
//     }

// }

//////////////////////////////////////////////////////////////////////////////////////Lesson 14 Modules

// instansiation von Class Invoice von module Invoce 

// const invOne = new Invoice("Mario", "work on the mario webseite", 250);
// const invTwo = new Invoice("Mario", "work on the mario webseite", 250);

// // eine variablen type Invoice[] array nur

// let invoices: Invoice[] = [];
// invoices.push(invOne);

// console.log(invoices);

// invTwo.client = "Mehdi";
// invTwo.details = "udemy";
// invTwo.amount = 19

/////////////////////////////////////////////////////////////////////////////////lesson 15 Interfaces

//to inforce certein type 

// interface Isperson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;

// }

// const me: Isperson = {
//     name: "mehdi",
//     age: 43,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log("I spent", amount);
//         return amount;
//     }
// };

// console.log(me);

// const greetPerson = (person: Isperson) => {
//     console.log("Hello ", person.name);
// }

////////////////////////////////////////////////////////////////////////////Lesson 16 Interfaces with Classes


///////////////////////////////////////////////////////////////////////////Lesson 17 Creating a RenderListItem Class

/////////////////////////////////////////////////////////////////////////// Lesson 18 Intro to Generics

// Generics

// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({name: "Mehdi", age: 40});

// console.log(docOne);
// console.log(docOne.age);

// // Generics Interfaces

// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }

//////////////////////////////////////////////////////////////////////Lesson 19 Enums

// enum ResourceType { BOOK, AUTHOR, FILM,DIRECTOR, PERSON }

// interface Rescource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }

// const docOne: Rescource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: { title: "Gone with the wind"}
// }

// const docTwo: Rescource<object> = {
//     uid: 2,
//     resourceType: ResourceType.PERSON,
//     data: { name: "mehdi"}
// }

///////////////////////////////////////////////////////////////////////Lesson 20 Tuples

// Array

// let myArray = ["Mehdi", 45, false];
// myArray[0] = false;
// myArray[2] = 1;


// // Tuple
// let tup: [string, number, boolean] = ["Mehdi", 43, false];
// tup[1] = 2;
// tup[0] = "ali";


////////////////////////////////////////////////////////////////////Lesson 21 Wrap up












