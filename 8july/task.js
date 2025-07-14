let b =document.querySelector('.btn')
b.addEventListener('click',function(){

 document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
     b.textContent = "Light";
    }else {
    b.textContent = "Dark";
            }
})
