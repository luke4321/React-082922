// -----------------Day1---------------------------------

// Javascript vs nodejs
// Javascript = ECAMscript + web.api
// Nodejs = ECAMscript + Node.api

// console.log(1);

// primitive data
// string number boolean undefined null symbol bigINT

// var str = 'abc';
// console.log(typeof str);
// console.log(typeof(str));
// var copystr = str;
// console.log(copystr);
// console.log(typeof 'string');
// console.log(typeof 911);
// console.log(typeof true);
// console.log(typeof null); // object --> bug


// * example 1
// let a = 5;

// function foo(x){
//     x = x * x;
//     return x;
// }

// console.log(foo(a)); 
// console.log(x);
// console.log(a);

// * example 2
// let b = 5;
// let c = b; 
// b = 6;
// console.log(b, c);

// * object data

// var obj = {
//     name: 'Dio',
// }

// function bar(input) {
//     // input.name = 'Jojo';
//     input = {name: 'Jojo'}
// }

// bar(obj);
// console.log(obj); 


// object data /Reference data
// class Todo {
//     constructor (title, id) {
//         this.title = title;
//         this.id = id;
//     }
// }

// var obj = new Todo('test', 1);
// console.log(obj);

// function a() {}
// console.log(typeof a)


// coercion
// console.log(typeof ('0' - '1')); // number
// console.log(true + false); // 1
// console.log( 7 + '5'); //
// console.log(typeof(7 + '5'))
// console.log(1 - '2'); // -1
// console.log(typeof(1 - '2'))
// console.log('2' - 1); // 1 
// console.log(typeof('2' - 1))

// var num = 234;  // 432

// var num2 = (num + '').split('').reverse().join('') - 0;

// console.log(typeof num2);


// == vs ===
// console.log('1' == 1);
// console.log("" == false);

// always always using === instead of using ==

// const hero1 = {
//     name: 'Batman'
// };
// const hero2 = {
//     name: 'Batman'
// };

// console.log(hero1 === hero1); // => true
// console.log(hero1 === hero2); // => false
// hero1 == hero1; // => true
// hero1 == hero2; // => false

// coding question
// const a = {age: 12}; 
// const b = {name: 'TT'};
// const c = {};
// c[a] = 456;
// c[b] = 745;
// console.log(c);

// console.log(c[a], c[b]);

// const a = new Map();
// const b = new Map();
// const c = new Map();

// c.set(a, 456);
// c.set(b, 678)
// console.log(c.get(a), c.get(b));


//              Var  vs.   let   vs. const
// hoisting      y         y          y
// init         undefined  -          -
// scope        function   block     block


// hoist is sending the front part (=) to the top of the scope
// var
// function foo() {
// var num = undefined;
//     console.log(num);

//     if (false) {
//         num = 62;
//     }
//     console.log(num);
// }

// foo();

// let and const

// function foo() {

//     if (true) {
//         console.log(num);
//         const num = 62;
//     }
//     // console.log(num);
// }

// foo();


// Oop: object oriented programming in js
// before ES6,
// function personFn(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const dio = new personFn('Dio', 20);
// console.log(dio);

// class Todo {
//     constructor (title, id) {
//         this.title = title;
//         this.id = id;
//     }
// }

// const obj = {}
// console.log(obj);

// class Person {
//     #name;
//     #age;
//     #height;
//     constructor(name, age, height) {
//         this.#name = name;
//         this.#age = age;
//         this.#height = height;
//     }

//     get name() {
//         return this.#name;
//     }

//     set name(newName) {
//         this.#name = newName;
//     }

//     run() {
//         console.log(this.#name + ' is running');
//     }
// }

// const p = new Person('Dio', 18, 5.8);
// // console.log(p.name);
// p.name = 'Jojo';
// console.log(p)

// class Employee extends Person {
//     constructor (area, company) {
//         super(area);
//         this.company = company;
//     }
    
// }

// Person.prototype.jump = function () {
//     console.log(`${this.name} is jumping`)
// }

// const e = new Employee('Patrick', 20, 6.3, 'Antra');
// e.run();

// e.jump();

// e.__proto__.swim = function () {
//     console.log(`${this.name} is swiming`)
// }

// console.log(e);
// e.swim();

// Employee2.prototype = Object.create(Person.prototype);


// Constructor function 

// Prototype chain 

// -----------------Day2---------------------------------

// Loop 

// const arr = [1, 2, 3];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for in vs for of 
// for (const i in arr) {
//     console.log(arr[i]);
// }

// arr['0'] --> arr[0]
// arr['1']
// arr['2']

// for (const ele of arr) {
//     console.log(ele);
// }

// Array methods: myForEach myMap myFilter myReduce 

// destrucure 

// rest parameter vs spread operator 

// object copy 

// -----------------Day3---------------------------------

// iife

// closure

// currying

// this

// call apply bind

// arrow function 

// event loop   an example of using var 

// -----------------Day4---------------------------------
// XHR

// Callback function, callback hell

// Promise 

// Myfetch 

// -----------------Day5---------------------------------

// Todolist 




