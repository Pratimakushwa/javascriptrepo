// string methods

let str="hacker space"
console.log(str[1]);
console.log(str.length);


let an=str.at(-1)
console.log(an);


let student="me nhi pdhuga"
console.log(student.repeat(10));

// use to change sentance

let str2="we are developer"
 let rs=str2.replace('developer','SDE')
 
 

 console.log(rs);
 

 let str3=" vivek is very good student and also good in studies"
 console.log(str3.replaceAll('good','bad'));
 

 let str4="pushpendra"
 console.log(str4.slice(0,5));

//  any string  return arry

 let str7='apple,mango,orange'
 console.log(str7.split(','));
 
 
 //templet litrals 
 let fname="md"
 let mname="quism"
 let lname="khan"
 console.log("my name"+" " + fname +" " + mname +" " +lname);

 
 console.log(`my name ${fname} and ${mname} and last name ${lname}`);
 