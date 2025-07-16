console.log("this is main file");

// import module1 from "./module1.js";

// console.log (module1(10,20));


import demo from './module1.js'
console.log(demo(9,1));

// import {add,sub} from './module2.js'
// when we want to change function name in name export
import {add as sum,sub as fun} from './module2.js'
// use copy not change diriect

// add()
// sub()
sum()
fun()