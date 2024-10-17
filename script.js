const url = 'https://restcountries.com/v3.1/all';

/*const findSA = (arr) =>{
    for(let index = 0; index < arr.length; index++)
        const element = arr[index];
    if(element.cca2 === "ZA")
        return element;
}*/
const getSA = (arr) =>{
    arr.find(e =>e.cca2 === "ZA");
    const ans =arr.filter (e=>e.region === "Africa")
    console.log(ans);
}

const changeJohn = (data)=>{
    const first = dat[0];
    document.getElementById("my-image").src =first.flags.png
}
const payload ={
    "userID":1,
    "gdfg"
}

fetch(url).then((response)=>{
    console.log(response);
    response.json().then(data =>{
        console.log(data);
        changeJohn(data);
    })
})

/*API*/
const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'},
        body: JSON.stringify(payload)
}
const send = (task, ) =>{

    fetch('https://jsonplaceholder.typicode.com.todos'), requestOptionst
    .then(r=>r.json())
    .then(d=>console.log(d));
} 