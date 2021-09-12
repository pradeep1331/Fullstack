const imgtag = document.getElementById("imgtag");
const nametag = document.getElementById("name");
const DOBTag = document.getElementById("DOB");


function loaddata(){

    fetch("https://randomuser.me/api/")
    .then((res)=>res.json())
    .then((data)=>{


        var imgURL = data.results["0"].picture.medium;
        imgtag.setAttribute("src",imgURL);

        var fname = data.results["0"].name.first;
        var lname = data.results["0"].name.last;
        nametag.innerText = `Name: ${fname} ${lname}`;

        var Dob = data.results["0"].dob.date;
        DOBTag.innerText = `DOB: ${Dob}`;

    })
}