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

// // // extends
// // personFn.prototype.jump = function () {
// //     console.log(`${this.name} is jumping`)
// // }
// // super
// function employeeFn(hello, height) {
//     personFn.call(this, hello);
//     this.height = height;
// this.__proto__ = [...personFn.__proto__, ...this.__proto__];
// }

// const jojo = new employeeFn('jojo', 10, 6);
// console.log(jojo);

// jojo.jump();


// const obj = {}
// console.log(obj);
// after es6
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
//         console.log(this.#age + ' is running');
//     }
// }

// const p = new Person('Dio', 18, 5.8);
// console.log(p.name);
// p.name = 'Jojo';
// console.log(p)

// class Employee extends Person {
//     constructor (a, b, company) {
//         super(a, b);
//         this.company = company;
//     }

// }


// const e = new Employee('Patrick', 20, 6.3, 'Antra');
// console.log(e);
// e.run();

// e.jump();

// e.__proto__.swim = function () {
//     console.log(`${this.name} is swiming`)
// }

// console.log(e);
// e.swim();



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
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(ele) {
//     console.log(ele);
// })
// current ele, current index, original array


// console.log(Array);
// Array.prototype.myforEach = function (fn) {
//     for (let i = 0; i < this.length; i++) {
//         fn(this[i], i, this);
//     }
// }
// console.log(arr.forEach((ele) => {
//     // array[i] = ele + 1;
//     // array.push(i); 
//     console.log(ele);
//     // console.log(arr === array);
// }));

// console.log(arr.map((ele) => {
//     // array[i] = ele + 1;
//     // array.push(i); 
//     console.log(ele);
//     // console.log(arr === array);
// }));

// Array.prototype.myMap = function(cb){
//         let newArr = [];
//         for (let i = 0; i < this.length; i++){
//             newArr.push(cb(this[i]));
//         }
//         return newArr;
// }

// arr.myMap((ele) => {
//     // ele ++; 
//     console.log(ele); 
// });


// const newarr = arr.myFilter(function (ele, i , array) {
//     return ele > 3;
// })



// Array.prototype.myFilter = function (cb) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         const item = this[i];
//         if (cb(item)) {
//             newArr.push(item);
//         }
//     }
//     return newArr;
// }
// const newarr = arr.myFilter(function (ele, i , array) {
//     return ele > 3;
// })

// console.log(newarr);

// arr.reduce(() => {}, )
// const numbers = [175, 50, 25];

// const reducer = function (acc, cur) {
//     return acc + cur;
// }

// console.log(numbers.reduce(reducer, 100));

// Array.prototype.myReduce = function (callback, initVal) {
//     let acc = initVal;
//     for (let i = 0; i < this.length; i++) {
//         acc = callback(acc, this[i], i , this)
//     }
//     return acc;
// }

// what if we dont know there is a initial value or not.
// Array.prototype.myReduce = function (...args) {
//     let acc = 0;
//     if (args.length === 2) {
//         acc = args[1];
//     }
//     for (let i = 0; i < this.length; i++) {
//         acc = args[0](acc, this[i], i , this);
//     }
//     return acc;
// }

// console.log(numbers.myReduce(reducer));

// destrucure 
// const [first, second] = [1, 2, 3];

// console.log(first, second);

// const obj = {name: 'Jojo', age: 18};

// const name = obj.name;
// const age = obj.age;

// const {age, name, height = "tall"} = obj;

// console.log(name, age, height);

// const {links} = {
//     id: 1,
//     name: 'Luke',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hbo.com'         },
//     ]
// };

// console.log(links.find(({name}) => name === 'cnn'));

// rest parameter vs spread operator 

// function foo(...args) {
//     console.log(arguments);
//     console.log(arguments[4]);
//     console.log(...args);
//     console.log(args);
// }

// function foo (num, ...args) {
//     console.log(num);
//     console.log(args);
// }
// foo(1, 2, 3, 4, "abc");

// const arr = [1, 2, 3];

// const arr1 = [...arr, 4, 5];

// console.log(arr1);

// const obj = {
//      age: 18, name: "jojo",
// }


// const obj1 = {...obj, height: 6};
// console.log(obj1 == obj); 


// object copy 
// shallow copy: share the reference
// deep copy: it copies the value with a different reference
// let arr1 = [1, 2, 3];
// arr2 = arr1;
// console.log(arr1 == arr2);

// const obj = {name: 'Jojo', age: 18}
// // just copy the refence
// const obj1 = obj;
// console.log(obj);

// const obj = {
//     name: 'Jojo',
//     age: 18,
//     links: [1, 2, 3],
//     date: new Date(), // new Data(obj.date)
//     foo: function() {
//         console.log('this is foo');
//     }
// };

// const obj2 = {...obj};

// // obj2.links = [100, 200, 300];
// // console.log(obj.links);

// obj2.links[0] = 100;
// console.log(obj.links);

// method1: 

// json strigify

// const obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj, JSON.parse(JSON.stringify(obj)));
// console.log(obj == obj2);

// Lodash _.cloneDeep();



// -----------------Day3---------------------------------

// iife

// var sum = (function(a, b) {
//     return console.log(a + b);
// })(1, 2);

// sum(1, 2);

// (function() {
//     console.log(5);
// })();


// (() => {
//     return console.log(4);
//   })();


// closure
// function myFn() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, a closure
//         console.log(name); // use variable declared in the parent function
//     }
//     return displayName;
// }
// console.log(myFn());

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// const add5 = makeAdder(5);

// const res = add5(2); 

// console.log(res);


// ------currying---------------

// this
// console.log(this);

// (function() {
//     console.log(this);
// })();

// const myObj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this);

//         const bar = function() {
//             console.log(this);
//         }
//         bar();
//     }
// }

// myObj.foo();

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     run() {
//         console.log(this);
//     }

//     static staticRun() {
//         console.log(this);
//     }
// }

// const p = new Person('Dio');
// p.run();
// Person.staticRun();

// 1. Function: this--> gloabl/window;
// 2. Object: if the funtions belongs to an object, this--> object.
// 3.1 Class: if "this" is in the class, this--> instance
// 3.2 Class: special case, if "this" is in the static method, this --> class


// bind call apply 

//* lazyloading 
// const obj = {
//     pi: 3.14,

//     getPi() {
//         return this.pi;
//     }
// }

// function getPerimeter(radius) {
//     console.log(this.getPi() * 2 * radius)
// };

// //* getPerimeter(20);

// const newGetPerimeter = getPerimeter.bind(obj);
// newGetPerimeter(20);

// //* call eagarloading
// getPerimeter.call(obj, 12);

// call vs aplly

// const obj = {
//     area: 1000,
//     getArea() {
//         return this.area;
//     }
// }

// function getNum(num1, num2) {
//     console.log(this.getArea(), num1, num2);
// }

// getNum.call(obj, 1, 2);

// getNum.apply(obj, [1, 2]);


// call and bind 

// const myObj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this);

//         (function() {
//             console.log(this);
//         }).apply(this); // this = myObj;

//         const bar = function() {
//             console.log(this);
//         }

//         const newBar = bar.bind(this);
//         newBar();
//     }
// }

// myObj.foo();


// arrow function 
//* some syntax
// const foo = (a, b) => a + b;
// * With arrow functions the this keyword always represents the object that defined the arrow function.
// const myObj = {
//     name: 'Dio',
//     age: 18,

//     foo: function() {
//         console.log(this);

//         const bar = function() {
//             console.log(this);
//         }
//         bar();

//         const baz = () => {
//             console.log(this);
//         }

//         baz();
//     }
// }

// myObj.foo();


// const arr = [1, 2, 3, 4, 5];

// // console.log(Array);
// Array.prototype.myforEach = (fn) => {
//     for (let i = 0; i < this.length; i++) {
//         fn(this[i], i, this);
//     }
// }

// arr.myforEach(function(ele) {
//     console.log(ele);
// })

// currying
// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }
// console.log(calculateVolume(4)(5)(6));

// const callback1 = a => a + 2; // 12
// const callback2 = b => b * 2; // 24
// const callback3 = c => c / 3; // 8

// // // use whatever callback you want...
// console.log(runAll(callback1, callback2, callback3)(10));

// function runAll (...args) {
//     return function(num) {
//         // return args.reduce((prev, currCb) => {
//         //     return currCb(prev);
//         // }, num);
//         let res = num;
//         for (let i in args) {
//             res = args[i](res);
//         }
//         return res;
//     }
// }

// event loop   
// setTimeout(function(){
//     console.log(1);
// }, 2000)


// console.log(0);
// setTimeout(function(){
//     console.log(1);
// }, 1000);
// console.log(2); // infinate loop 

// call stack       |      async api/ web api       | task queue/ callback queue

// console.log(0); gone

// setTimeout(....) gone --->    sconsole.log(1), after 1s ->   console.log(1) (watch stack)-> stack


// console.log(2); gone;

// console.log(1); gone;


// function foo() {

//     var i = undefined;

//     for (let i = 1; i < 5; i++) {
//         let i
//         setTimeout(() => console.log(i), i * 1000);

//     } // -> done
//     // / 0.0000000000000001s

//     // i -> 5

// }

// the close will help the return part to hold some data or logic from outter /parent function scope.
// a closure gives you access to an outer/parent function's scope from an inner function.

// foo();

// let i = 1;
// function foo() {
//     console.log(i);
// }
// setTimeout(foo, i*1000);
// i = 5;

// console.log(i), 1s -> async api;
// console.log(i), 2s -> async api;
// console.log(i), 3s -> async api;
// console.log(i), 4s -> async api;
// console.log(i), 5s -> async api;  -> 5 


// console.log(5); 

// function foo() {
//     for (var i = 1; i <= 5; i++) {
//         (function(){
//             setTimeout(() => console.log(v), v * 1000);
//         })(i)
//     } 
// }

// foo();


// -----------------Day4---------------------------------
// XHR

// Callback function, callback hell

// Promise 

// Myfetch 

// -----------------Day5---------------------------------

// // Todolist