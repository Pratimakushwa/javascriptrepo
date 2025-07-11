// function store(){
//     let name =document.querySelector('#name').value 
// localStorage.setItem('username', name)
// }
// function store(){
//     let contact =document.querySelector('#contact').value 
// localStorage.setItem('usercontact', contact)
// }
// function store(){
//     let age =document.querySelector('#age').value 
// localStorage.setItem('userage', age)
// }
// function store(){
//     let email=document.querySelector('#email').value 
// localStorage.setItem('useremail', email)
// }
// function store(){
//     let address=document.querySelector('#address').value 
// localStorage.setItem('useraddress', address)
// }

// let a= localStorage.getItem('useraddress')
// console.log(a);

// localStorage.removeItem('useraddress')
// localStorage.clear()


function fun(){
    let name= document.querySelector('#name').value 
    localStorage.setItem('username',name)
}
let a= localStorage.getItem('username')
console.log(a);
 localStorage.removeItem('username')
 localStorage.clear()  
 