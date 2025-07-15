// let date2=new Date()
// let dt=document.querySelector('#date')
// dt.textContent=date2.getDate()

// let day1=document.querySelector('#day')
// let arr=['sun','monday','tue','wed','thu','fri','sat']
// let day2=day2.getDay()
// day1.textContent=arr[day2]
// let m=document.querySelector('#month')
// m.textContent=date2.getMonth()+1
// let y=document.querySelector("#year")
// y.textContent=day2.getFullYear()


let date3=new Date()
let date=document.querySelector('#date')
date.textContent=date3.getDate()
let left=document.querySelector('#left')
left.style.backgroundColor="red"
left.style.color="white"

let day= document.querySelector('#day')
let arry=["sun","mon","tue","wed","thu","fri", "sat"]
let day3=date3.getDay()
day.textContent=arry[day3]




let months=document.querySelector('#month')
let month=["jan","feb","march", "april","may","jun","july","august","september","october","november", "december"]
let mm= date3.getMonth()
months.textContent=month[mm]


let right=document.querySelector('#right')
right.style.backgroundColor="red"
right.style.color="white"

let year=document.querySelector('#year')
year.textContent=date3.getFullYear()



