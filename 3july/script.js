function validate(){
    let name =document .querySelector('#name').value
    let city =document .querySelector('#city').value
    let contact =document .querySelector('#contact').value
    let age=document .querySelector('#age').value
    let email=document .querySelector('#email').value
    let password=document.querySelector('#password').value

    if (name==""){
      
       alert("please enter your name")
       document.querySelector('#name').focus()
       
       return false
    }
    else if (city==""){
         alert("please enter your city")
       document.querySelector('#city').focus()
       
       return false
    }
     else if (contact==""){
         alert("please enter your contact")
       document.querySelector('#contact').focus()
       
       return false
     }
    else if (contact.length>10 || contact.length<10){
         alert("please enter 10 digits contact")
       document.querySelector('#contact').focus()
       
       return false
     
    }
    else if (isNaN(contact)){
         alert("please enter your contact in digit")
       document.querySelector('#contact').focus()
       
       return false
     }


     else if (age==""){
         alert("please enter your age")
       document.querySelector('#age').focus()
       
       return false
     }
    else if (age.length>2 || age.length<2){
         alert("please enter 2 digits contact")
       document.querySelector('#age').focus()

       return false
     
    }

    else if (isNaN(age)){
         alert("please enter your contact in digit")
       document.querySelector('#age').focus()
       
       return false
     }
    else if (email==""){
         alert("please enter your email")
       document.querySelector('#email').focus()
       
       return false
     }
    else if(!(email.includes('@gmail.com'))||email.includes('@yahoo.com')) {
      alert("please enter valid email @")
      document.querySelector('#email').focus()
      return false
     }
    
else if (password==""){
      
       alert("please enter your password")
       document.querySelector('#password').focus()
       
       return false
    }
else if (!(password.match(/[ !,~,^,-,+,*,@]/))){
  alert("please enter special charcter")
  document.querySelector('#password').foucs()
  return false
}



}