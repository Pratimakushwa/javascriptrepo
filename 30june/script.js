function fun(){
    alert(" working")

}

function changetext(){
    let head= document.getElementById('head')
    head.textContent=" yes you  are right"
}

// function changetext(){
//     let b= document.getElementById('head1')
//     b.textContent="get lost"
//     b.style.color=" blue"
// }

// function hel(){
//     let c= document.getElementById('head1')
//     c.textContent="hello"
//     c.style.color="red"
// }

// function fun(){
//     let c= document.getElementById('head1')
//     c.textContent="red"
//     document.body.style.backgroundColor="red"
// }
// function change(){
//     let d= document.getElementById('head1')
//     d.textContent="green"
//     document.body.style.backgroundColor="green"
// }
// function text(){
//     let b= document.getElementById('head1')
//     b.textContent="yellow"
//     document.body.style.backgroundColor="yellow"
// }

// function fun(a){
//     let h1= document.getElementById('head1')
//     h1.textContent=a
//     document.body.style.backgroundColor=a
    
// }
// function fun(b){
//     let h2= document.getElementById('head1')
//     h2.textContent=a
//     document.body.style.backgroundColor=b
    
// }
// function fun(c){
//     let h3= document.getElementById('head1')
//     h3.textContent=c
//     document.body.style.backgroundColor=c
    
// }



function num(){
    let c= document.getElementById('head4')
    if(c.textContent==="pratima"){
          c.textContent="pramita";
    }
    else{
        c.textContent="pratima";
    }

}

function yes(){
    let b= document.getElementById('head6')
    b.textContent="get lost"
    b.style.color="blue"
    
}

let count=0
function add(){
     count++
    let c= document.getElementById('count')
    c.textContent=count
    if(count % 2!==0){
        c.style.color="red"

    }
    else{
        c.style.color="black"
    }
    
}
function sub(){
    if(count!=0){
        
     count--
   
    }
   
    let b= document.getElementById('count')
    b.textContent=count
    if(count % 2!==0){
        b.style.color="red"

    }
    else{
        b.style.color="black"
    }
    
    
}



