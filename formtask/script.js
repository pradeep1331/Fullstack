

let adddetail = () => {
 const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const addr = document.getElementById("addr");
const pincode = document.getElementById("pincode");
const gender = document.querySelectorAll(".gender");
const food = document.querySelectorAll(".food");
const state = document.getElementById("state");
const country = document.getElementById("country");
    
    console.log(fname.value);
    console.log(lname.value);

    let fnameinfo = fname.value;
    let lnameinfo = lname.value;
    let addrinfo = addr.value;
    let pincodeinfo = pincode.value;
    let genderinfo ;
    let foodinfo = [];
    let stateinfo ;
    let countryinfo ;
    gender.forEach(element => {

        if(element.checked){
            genderinfo = (element.value);

        } 
    });

    food.forEach(element => {

        if(element.checked){
            foodinfo.push(element.value);

        } 
    });

    stateinfo = state.value;
    countryinfo = country.value;   

    
    console.log(fnameinfo);
    console.log(lnameinfo);
    console.log(addrinfo);
    console.log(pincodeinfo);
    console.log(genderinfo);
    console.log(foodinfo);
    console.log(stateinfo);
    console.log(countryinfo);   

   
    const tableRow = document.querySelector("#tableBody");

     const html = ` <tr>
                 <td>${fnameinfo}</td>
                 <td>${lnameinfo}</td>
                 <td>${addrinfo}</td>
                 <td>${pincodeinfo}</td>
                 <td>${genderinfo}</td>
                 <td>${foodinfo}</td>
                 <td>${stateinfo}</td>
                 <td>${countryinfo}</td>
                      </tr>`;

                      tableRow.insertAdjacentHTML("afterend",html);

     
}


