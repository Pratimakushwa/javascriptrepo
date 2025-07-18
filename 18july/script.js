// // npm install -g json-server

// json-server --version

async function fet(){
    let res = await fetch('http://localhost:3000/userdata')
    let data = await res.json()
    // console.log(data);
    let st= data.map((item)=>`
    <tr>
    <td> ${ item.id}</td>
    <td> ${ item.name}</td>
    <td> ${ item.age}</td>
    <td> ${ item.contact}</td>
    <td> ${ item.city}</td>
    </tr>

    `).join(" ")
    document.querySelector('#storedata').innerHTML=st
    
}
fet()