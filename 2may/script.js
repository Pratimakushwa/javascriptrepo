//object literal
const person ={
    name : "john",
    age: 23,
    city: "london",
};
console.log(person.name);
console.log(person.age);

console.log(person.city);

//array
// index start from 0
const number=[1,2,3,4,5,6];
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
//function
//function declaration
function display(){                                                                                  
    console.log("hello everyone");
    alert("hello");
    
}
// function calling
display();
console.log(display,typeof display);

//operators
let x = 10;
let y = 5;

// let z = x+y;
// z = x-y;
// z = x/y;
// z = x%y;
// z = x*y;
// console.log(z);
// x++
// x = x+1; 
// x--
// x = x-1;
// x = x+y;
// x+=y;

//eqality operator
//== check value
//===check data type also value
if(x==y){
    console.log(true);
    
}
else{
    console.log(false);
    
}

//concatnation
let first = "hello";
let last = "world";
let fullstring = first+" "+last;
console.log(fullstring);
console.log("how"+" "+ first+ last);
//string
// templet literl or templet string or backticks
let data =`hello ${first}and ${last} `
console.log(data);


