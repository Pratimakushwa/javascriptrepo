// remove two element starting and ending
let letters=["a","b","c","d"]
letters.splice(1 , 2);
console.log(letters);

// insert "x", and "y"  at the index 2 without deleting anything
 let arr=[1,2,3,4,5];
 arr.splice(2,0 ,"x","y")
 console.log(arr);
 // combine these two arrys into one
 let a = [1,2];
 let b = [3,4];

 const arrys= a.concat (b);
 arrys.reverse();
 console.log(arrys);
 //add the element blue to the  end of this array
 let color=["red","green"];
  color.push("blue")
console.log(color);

 // remove the last element from this arry and store it in a variable
  let fruit= ["apple", "banana", "orange"]
   fruit.pop()
   console.log(fruit);
   
