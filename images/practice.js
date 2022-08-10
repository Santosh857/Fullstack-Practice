let emp = [{id:120,name:"santosh",gender:"M"},{id:121,name:"ravi",gender:"M"}]
let display = ()=> {
   console.log("Test case 123");
   let rows = "";
   emp.map((i) =>{
      rows=
      rows +
     `<tr>
        <td>${i.id}</td>
        <td>${i.name}</td>
        <td>${i.gender}</td>
     </tr>`
   })
   document.getElementById("Ravi").innerHTML = rows;
  };
