// fetch => get  ,post , delete,put pending
//promise -> fullfill,pending ,reject
// http method
// get post, delete, put ,patch

// API  application programing interface

// fatch () => promise =>async  await is use get data

// json // javascript object notation

async function demo(){
    let response= await fetch("https://jsonplaceholder.typicode.com/comments")
    let data = await response.json()
    // console.log(data);
    // let name= data.map((e)=>{ return e.name})
    // console.log(name);
    
    let apidata =data.map((e)=>`
    <tr>
    <td>${e.id} </td>
    <td> ${e.name} </td>
    <td> ${e.email}</td>
    </tr>
`).join(" ")
// console.log(apidata);

let savedata=document.querySelector("#savedata")
savedata.innerHTML=apidata
   

    
}
demo()


 
