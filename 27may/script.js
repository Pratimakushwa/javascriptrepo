for(let i= 1; i<=10; i=i++){
    console.log(i);
    
}
for(let i= 1; i<=10; i++){
    if (i%2==0){
        console.log(i);
    }
    
    // console.log(i);
    
}
//while
let i;
while (i<100){
    console.log(i);
    i++
}
let y = 11;
//do while
do{
    console.log(y);
    y++;
}
while(y<10);
// the for in loop 
// the javascript for in statement loops through the properties  of an bject
// key in  object

const person ={
    name: "johan",
    age: 23,
    city:bhopal
};
for (let x in person){
    console.log(person(x));
    
}

const numbers=[10,20,30,50]
for (let x in number){
    console.log([x]);
    
}
//for of
const array1 =[100,200,300,400]
for(let x of array1){
    console.log(x);
    
}

// let str = "javascript"
// for( let x of str){
//     console.log(x);
    
// }
//for each loop
// the for foreach () method calls function (a callback function ) once 
// for each arry Element.

// const num = [34, 45, 234,13]
//  let text = " ";
//  num .forEach (myfunction);

//  function myfunction(x){
//     text+= x + " ";
//  }
//  console.log(text);
 
 const num = [10,20,40]
 let text = " ";
 num .forEach (myfunction);

 function myfunction(x){
    text**= x ** " ";
 }
 console.log(text);

 let str =["apple", "mango", "lichi"]



 // map () method is used for creating a new array from an existing the applying  a function to each
//   one of the element to each one of the arry

 //map method in js
 const num1= [1,2,3,4,5]
 const newArray= num1.map(myfunction2);

 function myfunction2(x){
    return x*x;
 }
 console.log(newArray);
 
 
 