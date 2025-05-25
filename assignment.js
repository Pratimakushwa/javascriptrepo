1// How to get the first three character of string ?

// let str= "HelloWorld";
//  let firsTthree= str.substring(0,3);
// console.log(firsTthree);

2// delete first character of a string
// let str= "HelloWorld";
//  let  modified= str.substring(1);
// console.log(modified);

3// sort an array of string
//  let arr=[ "banana", "apple", "cherry"]
//  arr.sort();
//  console.log(arr);

4// Remove all break line from a  string
// let str= "I\nlove\njavascript"
// let breaks= str.split("\n")
// console.log(breaks);

5// extract a number from a string
// let str= "hellow123";
// let number= str.substring(6)
// console.log(number);

6// convert string to date 
// let date= "2025-02-14";
// let realDate =new Date(date);
// console.log(realDate);

7//insert string at specific index 
// let original = "hello World ";
// let toInsert= "Beautifull";
// let index=5;
// let result= original.substring(0,index)+toInsert+original.substring(index);
// console.log(result);

8//how to find the longest word within the string in javascript
// let str =" dog elephant cat";
// let words = str.split(' ')
// let sorted = words. sort((a,b)=> b.length-a.length);
// console.log(sorted);

9//write a javascript program to find  the prime number in given array

// let arr= [1,2,3,4,5,6,,7,8,9,10];
// let prime=[];
// for(let i= 0;i<arr.length; i++){
//     let num = arr[i]
//     let count = 0;
//     if(num>1){
//         for (let j=1; j<=num; j++){
//             if(num%j==0){
//                 count++;
//             }
//         }
//         if(count==2){
//             prime.push(num)
//         }
//     }
// }
// console.log(prime);

10//write a  javascript program  to find  the smallest value in an array
// let arr=[5,3,8,1,6]
// let min=arr[0]
// for (let i =1; i <arr.length;i++){
//     if(arr[i]<min){
//         min= arr[i];
//     }
// }
// console.log(min);

11//write a javascript program to find the sum of the value  of an array
// let arr=[5,3,8,1,6]
// let sum = 0;
// for(let i= 0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum);

// 12 //write a program to check the given string is palindrom or not
// let str= " javascript"
// let reverse= str.split(" ").reverse(). join(" ");
// if (str==reverse){
//     console.log("palindrom");
// }
// else{
//     console.log("not a palindraom");
    
// }
13//write a javascript  program to find current age of any person by using his/her date of birth
//  const dob="2004-04-07";
//  const birthDate=new Date(dob);
//  const today=new Date();
//  let age = today.getFullYear()-birthDate.getFullYear();
//  if(today.getMonth()<birthDate.getMonth()|| ( today.getMonth()&& today.getDate()< birthDate.getDate())){
//     age=age-1;
//  }
//  console.log( age);
14//how to calculate yestarday date  in javascript
// const today= new Date();
// const date=( today.getDate()-1)
// console.log(date);
15// write a javascript program to find the given year is leap year or not
// let year= 2025
// if ((year%4==0&& year%100!==0) || (year%400==0)){
//     console.log( year +" is a leap year");
// }
// else{
//     console.log(year+" is not a leap year");
    
// }