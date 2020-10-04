
const sectiontag = document.createElement("section");

document.body.append(sectiontag)
sectiontag.setAttribute("class","header");

const targetheader = document.querySelector(".header");
const divtag1 = document.createElement("div");
divtag1.setAttribute("class","name");
divtag1.innerHTML = " <span>BRIAN DUDEY</span>";
targetheader.append(divtag1);

const divtag2 = document.createElement("div");
document.body.append(divtag2)
divtag2.setAttribute("class","colour");


const divtag3 = document.createElement("div");
document.body.append(divtag3)
divtag3.setAttribute("class","colour1");

const divtag4 = document.createElement("div");
document.body.append(divtag4)
divtag4.setAttribute("class","details");

const targetdiv4 = document.querySelector(".details");
const ptag1 = document.createElement("p");
ptag1.innerText ="N.Damen Avenue, Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com";
targetdiv4.append(ptag1);


const divcontainer = document.createElement("div");
document.body.append(divcontainer);
divcontainer.setAttribute("class","container");
divcontainer.setAttribute("style","display: flex; height: 1500px;");

const divstyle1 = document.createElement("div");

const target2 = document.querySelector(".container");

target2.append(divstyle1);
divstyle1.setAttribute("style","width: 45%");
divstyle1.setAttribute("class","subcontainer1");

const divprofile = document.createElement("div");
divprofile.setAttribute("class","profile");

target3 = document.querySelector(".subcontainer1");

target3.append(divprofile);

const divprofic = document.createElement("div");

const target4 = document.querySelector(".profile");

target4.append(divprofic);

divprofic.setAttribute("class","profile-icon");
divprofic.setAttribute("id","prficn1");

const target5 = document.getElementById("prficn1");

const itag = document.createElement("i");

target5.append(itag);
itag.setAttribute("class","fa fa-user");
target4.append(document.createElement("h2").innerText="Profile");

const divprofiletext1 = document.createElement("div");
divprofiletext1.setAttribute("class","profile-text");
target3.append(divprofiletext1);

target6 = document.querySelector(".profile-text");

const prfparagh = document.createElement("p");
prfparagh.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit velit odit asperiores enim alias beatae placeat est deserunt, necessitatibus quidem nam assumenda numquam sapiente, non totam, et blanditiis incidunt. Voluptatem, voluptate hic exercitationem culpa fuga accusantium quidem tenetur laborum.";
target6.append(prfparagh);


const divskilprf = document.createElement("div");
divskilprf.setAttribute("class","profile");
divskilprf.setAttribute("id","prf1");
target3.append(divskilprf);


const target7 = document.getElementById("prf1");
const divprficn2 = document.createElement("div");
divprficn2.setAttribute("class","profile-icon");
divprficn2.setAttribute("id","prficn2");
target7.append(divprficn2);


target8 = document.getElementById("prficn2");
const skillicn = document.createElement("i");
skillicn.setAttribute("class","fa fa-flask");
skillicn.setAttribute("aria-hidden","true");

target8.append(skillicn);

const hed1 = document.createElement("h2");
hed1.innerText="Skills";

target7.append(hed1);

const divskillsinf = document.createElement("div");
divskillsinf.setAttribute("class","skills-info");

target2.append(divskillsinf);

target9 = document.querySelector(".skills-info");

const sectionskills = document.createElement("section");
sectionskills.setAttribute("id","skills");

target9.append(sectionskills);

target10 = document.getElementById("skills");

const h4tchskil = document.createElement("h4");
h4tchskil.innerText ="TECHNICAL SKILLS";

target10.append(h4tchskil);

const divmyskills = document.createElement("div");
divmyskills.setAttribute("class","myskills");

target10.append(divmyskills);

const target11 = document.querySelector(".myskills");

const  divskillitem = document.createElement("div");
divskillitem.setAttribute("class","skillitem");

target11.append(divskillitem);

const target12 = document.querySelector(".skillitem");

const divprogramming = document.createElement("div");
divprogramming.setAttribute("class","programming");
target11.append(divprogramming);

const target13 = document.querySelector(".programming");

const ulprg = document.createElement("ul");
ulprg.setAttribute("id","list");
target13.appendChild(ulprg);


const target14 = document.querySelector("#list");

const h31 = document.createElement("h3");
h31.innerText = "HTML";
h31.setAttribute("id","first-prg");
target14.appendChild(h31);

target15 = document.getElementById("first-prg");
const divspn1 = document.createElement("span");
divspn1.setAttribute ("class","bar");

const divspn2 = document.createElement("span");
divspn2.setAttribute("class","html");

target15.append(divspn1);
target15.append(divspn2);

const h32 = document.createElement("h3");
h32.innerText = "CSS";
h32.setAttribute("id","ccs1");
target14.append(h32);

target16 = document.getElementById("ccs1");
const divspn3 = document.createElement("span");
divspn3.setAttribute ("class","bar");

const divspn4 = document.createElement("span");
divspn4.setAttribute("class","html");
target16.append(divspn3);
target16.append(divspn4);

const h33 = document.createElement("h3");
h33.innerText = "JavaScript";
h33.setAttribute("id","js");
target14.append(h33);

target17 = document.getElementById("js");
const divspn5 = document.createElement("span");
divspn5.setAttribute ("class","bar");

const divspn6 = document.createElement("span");
divspn6.setAttribute("class","html");
target17.append(divspn5);
target17.append(divspn6);

const h34 = document.createElement("h3");
h34.innerText = "python";
h34.setAttribute("id","python");
target14.append(h34);

target18 = document.getElementById("python");
const divspn7 = document.createElement("span");
divspn7.setAttribute ("class","bar");

const divspn8 = document.createElement("span");
divspn8.setAttribute("class","html");
target18.append(divspn7);
target18.append(divspn8);



const h35 = document.createElement("h3");
h35.innerText = "Bootstrap";
h35.setAttribute("id","Bootstrap");
target14.append(h35);

target19 = document.getElementById("Bootstrap");
const divspn9 = document.createElement("span");
divspn9.setAttribute ("class","bar");

const divspn10 = document.createElement("span");
divspn10.setAttribute("class","html");
target19.append(divspn9);
target19.append(divspn10);

