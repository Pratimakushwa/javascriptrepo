// let btn=document.querySelector('#btn')
// btn.addEventListener('click',function(){
//     alert("working")
// })
// let a=document.querySelector('#name')
// a.addEventListener('')


let btn1=document.querySelector('#btn1')
btn1.addEventListener('click',()=>{
    let wr=document.querySelector('#wrapper')
    wr.classList.add('main')

})


let btn2=document.querySelector('.btn2')
btn2.addEventListener('click',()=>{
    let wr =document.querySelector('#wrapper')
    wr.classList.remove('main')

})

let btn3=document.querySelector('.btn3')
btn3.addEventListener('click',function(){
    let wr =document.querySelector('#wrapper')
    wr.classList.toggle('main')

})



