// setInterval(()=>{

// let now = new Date();
// let arry=["sun","mon","tue","wed","thu","fri", "sat"]
// let day=now.getDay()
// ee.textContent=arry[day]

// let date = now.toLocaleDateString();
// let time = now.toLocaleTimeString();
//  let ee=document.querySelector('#name').innerHTML = `${day}, ${date} - ${time}`;


// })

// let now = new Date();
// let day = now.toLocaleString('default', { weekday: 'long' });
// let date = now.toLocaleDateString();
// let time = now.toLocaleTimeString();
// document.querySelector('#name').innerHTML = `${day}, ${date} - ${time}`;
// setInterval(() => {
//   let now = new Date();

//   let arry = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   let dayIndex = now.getDay(); // 0 to 6
//   let day = arry[dayIndex];

//   let date = now.toLocaleDateString();
//   let time = now.toLocaleTimeString();


//   let ee = document.querySelector('#name');  // first get the element
//   ee.textContent = `${day}, ${date} - ${time}`;  // then set the value
// }, 1000); // interval of 1 second
// function getRandomColor() {
//   return '#' + Math.floor(Math.random()*16777215).toString(16);
// }


// setInterval(() => {
//   let time = new Date().toLocaleTimeString();
//   let element = document.querySelector('#name');
//   element.innerHTML = time;
//   element.style.color = getRandomColor();
// }, 1000);
  

// let is24Hour = false; // By default 12-hour format

// document.querySelector('#toggle').addEventListener('click', () => {
//   is24Hour = !is24Hour; // Flip the format on every click
// });

// setInterval(() => {
//   let now = new Date();
  
//   let time = is24Hour 
//     ? now.toTimeString().split(' ')[0]  // 24-hour format
//     : now.toLocaleTimeString();        // 12-hour format with AM/PM

//   document.querySelector('#name').innerText = time;
// }, 1000);


// setInterval(()=>{
//     let day=new Date
//      let arry= ['sun', 'mon','tue','wed','thu', 'fri','sat',]
//      let now= day.getDay()
//      let day1= arry[now]
//       let date=day.toLocaleDateString()
//     let time= day.toLocaleTimeString()
//    let ww= document.querySelector('#name')
//    ww.textContent=`${day1} ${date}-${time}`;
// })



// setInterval(()=>{
//     let day= new Date
//     let arry=['mon','tues','wed','thus','fri','sat','sun']
//     let date=day.getDay()
//     let day1= arry[date]
//     let date1=day.toLocaleDateString()
//     let time= day.toLocaleTimeString()
//     let qq=document.querySelector('#name')
//     qq.textContent=`${day1}, ${date1}- ${time}`;
// },1000)



function getRandomColor(){
return '#'+ Math.floor(Math.random()*1677725 ).toString(16)
 

}
setInterval(()=>{
    let date=new Date
    let time=date.toLocaleTimeString()
    let ee=document.querySelector('#name')
    ee.textContent=time
    ee.style.color=getRandomColor()
},1000)


let date=new Date
let arry=["sun","mon","tues","wed","thus","fri","sat"]
let day=date.getDay()
let day1=arry[day]
let day2=document.querySelector('#day')
day2.textContent=day1

let date1=document.querySelector('#date')
date1.textContent=date.getDate()

let month=["jan","feb","march","april","may","jun","july","august","sept","oct","novem","dec"]
let day4=date.getMonth()
let day5=month[day4]
let months=document.querySelector('#month')
months.textContent=day5

let year=document.querySelector('#year')
year.textContent=date.getFullYear()

