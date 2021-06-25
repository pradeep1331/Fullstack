var count=1;

var element ;

var updatetable = function(){

var nametext = document.getElementById("namebox").value;
var agetext = document.getElementById("agebox").value;
var emailtext = document.getElementById("emailbxox").value;

console.log(nametext)
console.log(agetext)
console.log(emailtext)

rows = "row"+count;
delrow = "Delete"+count;
editrow = "edit" + count;

var tbody = document.getElementById("tablebody");

var trow = document.createElement("tr");
trow.setAttribute("id",rows)
tbody.appendChild(trow);

var tdetail = document.getElementById(rows);

var tde= document.createElement("td");
tde.innerHTML = nametext;

tdetail.appendChild(tde);

var tde1= document.createElement("td");
tde1.innerHTML = agetext;

tdetail.appendChild(tde1);


var tde2= document.createElement("td");
tde2.innerHTML = emailtext;

tdetail.appendChild(tde2);


var delbutton = document.createElement("button");
delbutton.setAttribute("type","button");
delbutton.innerText= "Delete";
delbutton.setAttribute("onClick","deletebutton("+rows+")");
delbutton.setAttribute("id",delrow);

tdetail.appendChild(delbutton);


var edit = document.createElement("button");
edit.setAttribute("type","button");
edit.innerText= "edit";
edit.setAttribute("onClick","edit("+rows+")");
edit.setAttribute("id",editrow);

tdetail.appendChild(edit);

count++;

document.getElementById("namebox").value="";
document.getElementById("agebox").value="";
document.getElementById("emailbxox").value="";

}



var deletebutton = function(row){

    var elestr = row.getAttribute("id");

    var eledel = document.getElementById(elestr);

    eledel.remove();


}

var edit = function(row){

   var getdetails = row.getAttribute("id");

   var details1 = document.getElementById(getdetails);

   var namedetail = details1.childNodes[0].innerText;
   var agedetail = details1.childNodes[1].innerText;
   var emaildetail = details1.childNodes[2].innerText;

   document.getElementById("namebox").value = namedetail;
   document.getElementById("agebox").value = agedetail;
   document.getElementById("emailbxox").value = emaildetail;


   document.getElementById("updatebutton").disabled = false;
   document.getElementById("submit").disabled = true;

   document.getElementById("updatebutton").setAttribute("onclick","updatevalues("+getdetails+")")

   element = getdetails;
   
}

var updatevalues = function(row){


var nametext = document.getElementById("namebox").value;
var agetext = document.getElementById("agebox").value;
var emailtext = document.getElementById("emailbxox").value;

var getdetails = row.getAttribute("id");
var details1 = document.getElementById(getdetails);

details1.childNodes[0].innerText = nametext;
details1.childNodes[1].innerText= agetext;
details1.childNodes[2].innerText = emailtext;


document.getElementById("updatebutton").disabled = true;
document.getElementById("submit").disabled = false;

document.getElementById("submit").setAttribute("onclick","updatetable()")

document.getElementById("namebox").value="";
document.getElementById("agebox").value="";
document.getElementById("emailbxox").value="";




}



