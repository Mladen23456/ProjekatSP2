const fetchStundents=async()=>{
    const responese1=await fetch("http://localhost:3004/students")
    const data1 =await responese1.json()
let tableB=document.getElementById("tableBody")

data1.forEach((student)=> {
    let row =
    `
    <tr>
<td>${student.name}</td>
<td>${student.lastName}</td>
<td>${student.age}</td>
<td>${student.city}</td>
    </tr>
    `
    tableB.innerHTML=tableB.innerHTML+row
});
}
const postStudents = async ()=>{ 
    const data={
        id:Math.random(),
        name:document.getElementById("name").Value,
        lastName:document.getElementById("lastNameInput").value,
        age:document.getElementById("age").Value,
        city:document.getElementById("cityInput").Value,
    }
    try {
        const response= await fetch("http://localhost:3004/students",{
            method:"POST",
            body:JSON.stringify(data),
            heders:{"Cotent-Type":"application/json"}})
        const responseJson=await response.json()
        console.log(responseJson);
    } catch (error) {
        console.log(error);
    }
}



fetchStundents()