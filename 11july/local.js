// let ob={
//     name:"ankit",
//     city:"bhopal",

// }
// localStorage.setItem('userdata',JSON.stringify(ob))
// let c= JSON.parse(localStorage.getItem('userdata'))
// // let c= localStorage.getItem('userdata')
// console.log(c);


function storedata(){
    let userdata={
        name:document.querySelector('#name').value,
        contact:document.querySelector('#contact').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#password').value,
       
}
localStorage.setItem('signdata',JSON.stringify(userdata))
}

let storedataa=JSON.parse(localStorage.getItem('signdata'))
console.log(storedataa);

function logindata(){
    let logind={
        email:document.querySelector('#loginemail').value,
        password:document.querySelector('#loginpass').value,
    
    }
    if(storedataa.email!=logind.email || storedataa.password!=logind.password){
        alert("user not found")
        return false
    }


}

