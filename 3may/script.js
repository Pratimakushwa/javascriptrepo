//string 
let str = "javascript is a great language javascript"
//gives the number of charcter in the string
let x = str.length;
console.log(x);

//chartAt- gives the charcter at their index
x = str.charAt(4)
//x = "javascript". charAt//ho skta hai
// console.log (str.charAt(4))
console.log(x);
//index of()
x = str.indexOf("p")

console.log(x);
// uppercase
x= str.toUpperCase()
console.log(x);

x= str.toLowerCase()
console.log(x);
//include check if text is present or not
x = str.includes("great");
//replace replace first element
//replaceAll replace all element
x = str.replace("javascript","react")
console.log(x);
x=str.replaceAll("javascript", "react")
console.log(x);
//trim removes the white space start and end
x = str.trim();
console.log();
//slipt convert to array
x = str.split(" ")
//slice- remove a part of a string (starting index ,ending index)
// if given one value extract the remaining
x = str.slice(0,15)
console.log(x);
//substring but not use negative index
x = str.substring(0,10)
x = str.substring(25)
console.log(x);

let a = "hello"
let b = "world"
let c = `${a} ${b}`;
c  = a+b;
c = a .concat(b)
console.log(c);

 
// let myString = "developer"
//   x = myString.charAt(0).toUpperCase()+ myString.substring(1)
//    console.log(x);
let myString = "developer"
x = myString.charAt(0);
x = myString.charAt
  
  
  




