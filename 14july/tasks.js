let date2=new Date()
let dt=document.querySelector('#date')
dt.textContent=date2.getDate()

let day1=document.querySelector('#day')
let arr=['sun','monday','tue','wed','thu','fri','sat']
let day2=day2.getDay()
day1.textContent=arr[day2]
let m=document.querySelector('#month')
m.textContent=date2.getMonth()+1
let y=document.querySelector("#year")
y.textContent=day2.getFullYear()