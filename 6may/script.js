let d = new Date ();
 d= new Date ("2022-3-12 12:30:45");
 d= new Date ("12-3-2022");
 d = new Date("2022/5/13");
 d = new Date("249857565");
console.log(d);
//methods of dates
const year = d.getFullYear();
console.log(year);
const month= d.getMonth();
console.log(month);
const day= d.getDay();
console.log(day);
const hour= d.getHours();
console.log(hour);
const min= d.getMinutes();
console.log(min);
const sec= d.getSeconds();
console.log(sec)

 let d= new Date()
 console.log(d.getDay());
 
//  const  day = d.getDay();

// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//             console.log("tuesday");
//             break;
//     case 3:
//             console.log("wednesday");
//             break;
            
//     case 4:
//         console.log("thursday");
//          break;
//     case 5:
//         console.log("friday");
//         break;
        
//    case 6:
//     console.log("saturday");
//        break;
    
      
        
// } 