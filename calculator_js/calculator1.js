
const formtag = document.createElement("form");
formtag.setAttribute("class","form-control");
formtag.setAttribute("id","form");

document.body.append(formtag);


const target1 = document.querySelector("#form");

const divcontainer = document.createElement("div");
divcontainer.setAttribute("class","calculator-frame container");
divcontainer.setAttribute("id","container");

target1.appendChild(divcontainer);

target2 = document.querySelector("#container");
  
const h1tag = document.createElement("h1");
h1tag.setAttribute("style","text-align: center;");
h1tag.innerText = "Calculator";

target2.appendChild(h1tag);


const divtxt = document.createElement("div");
divtxt.setAttribute("class","display");
divtxt.setAttribute("id","display");

target2.appendChild(divtxt);

const target3 = document.querySelector("#display");

const inputtag1 = document.createElement("input");
inputtag1.setAttribute("type","text");
inputtag1.setAttribute("value","");
inputtag1.setAttribute("class","form-control");
inputtag1.setAttribute("id","textfield");

target3.appendChild(inputtag1);

const divsubcont = document.createElement("div");
divsubcont.setAttribute("class","subcontainer");
divsubcont.setAttribute("id","subcontainer");

target2.appendChild(divsubcont);

const divrow = document.createElement("div");
divrow.setAttribute("class","row");
divrow.setAttribute("id","row");

target4 = document.querySelector("#subcontainer");

target4.append(divrow);

target5 = document.querySelector("#row");

const divcol1 = document.createElement("div");
divcol1.setAttribute("class","col-4 btn");
divcol1.setAttribute("id","col1");

target5.append(divcol1);

target6 = document.querySelector(".col-4");

const inptag1 = document.createElement("input");
inptag1.setAttribute("type","button");
inptag1.setAttribute("value","1");
inptag1.setAttribute("class","form-control");
inptag1.setAttribute("id","button1");

target6.appendChild(inptag1);



const divcol2 = document.createElement("div");
divcol2.setAttribute("class","col-4 btn");
divcol2.setAttribute("id","col2");

target5.append(divcol2);

target7 = document.querySelector("#col2")

const inptag2 = document.createElement("input");
inptag2.setAttribute("type","button");
inptag2.setAttribute("value","2");
inptag2.setAttribute("class","form-control");
inptag2.setAttribute("id","button2");
target7.append(inptag2);

const divcol3 = document.createElement("div");
divcol3.setAttribute("class","col-4 btn");
divcol3.setAttribute("id","col3");

target5.append(divcol3);

target8 = document.querySelector("#col3");

const inptag3 = document.createElement("input");
inptag3.setAttribute("type","button");
inptag3.setAttribute("value","3");
inptag3.setAttribute("class","form-control");
inptag3.setAttribute("id","button3");
target8.append(inptag3);

const divcol4 = document.createElement("div");
divcol4.setAttribute("class","col-4 btn");
divcol4.setAttribute("id","col4");

target5.append(divcol4);

target9 = document.querySelector("#col4");
const inptag4 = document.createElement("input");
inptag4.setAttribute("type","button");
inptag4.setAttribute("value","4");
inptag4.setAttribute("class","form-control");
inptag4.setAttribute("id","button4");
target9.append(inptag4);

const divcol5 = document.createElement("div");
divcol5.setAttribute("class","col-4 btn");
divcol5.setAttribute("id","col5");

target5.append(divcol5);

target10 = document.querySelector("#col5");
const inptag5 = document.createElement("input");
inptag5.setAttribute("type","button");
inptag5.setAttribute("value","5");
inptag5.setAttribute("class","form-control");
inptag5.setAttribute("id","button5");
target10.append(inptag5);


const divcol6 = document.createElement("div");
divcol6.setAttribute("class","col-4 btn");
divcol6.setAttribute("id","col6");

target5.append(divcol6);

target11 = document.querySelector("#col6");
const inptag6 = document.createElement("input");
inptag6.setAttribute("type","button");
inptag6.setAttribute("value","6");
inptag6.setAttribute("class","form-control");
inptag6.setAttribute("id","button6");
target11.append(inptag6);

const divcol7 = document.createElement("div");
divcol7.setAttribute("class","col-4 btn");
divcol7.setAttribute("id","col7");

target5.append(divcol7);

target12 = document.querySelector("#col7");
const inptag7 = document.createElement("input");
inptag7.setAttribute("type","button");
inptag7.setAttribute("value","7");
inptag7.setAttribute("class","form-control");
inptag7.setAttribute("id","button7");
target12.append(inptag7);

const divcol8 = document.createElement("div");
divcol8.setAttribute("class","col-4 btn");
divcol8.setAttribute("id","col8");

target5.append(divcol8);

target13 = document.querySelector("#col8");
const inptag8 = document.createElement("input");
inptag8.setAttribute("type","button");
inptag8.setAttribute("value","8");
inptag8.setAttribute("class","form-control");
inptag8.setAttribute("id","button8");
target13.append(inptag8);

const divcol9 = document.createElement("div");
divcol9.setAttribute("class","col-4 btn");
divcol9.setAttribute("id","col9");

target5.append(divcol9);

target14 = document.querySelector("#col9");
const inptag9 = document.createElement("input");
inptag9.setAttribute("type","button");
inptag9.setAttribute("value","9");
inptag9.setAttribute("class","form-control");
inptag9.setAttribute("id","button9");
target14.append(inptag9);


const divcol10 = document.createElement("div");
divcol10.setAttribute("class","col-4 btn");
divcol10.setAttribute("id","col10");

target5.append(divcol10);

target15 = document.querySelector("#col10");
const inptag10 = document.createElement("input");
inptag10.setAttribute("type","button");
inptag10.setAttribute("value","0");
inptag10.setAttribute("class","form-control");
inptag10.setAttribute("id","button0");
target15.append(inptag10);

const divcol11 = document.createElement("div");
divcol11.setAttribute("class","col-4 btn");
divcol11.setAttribute("id","col11");

target5.append(divcol11);

target16 = document.querySelector("#col11");
const inptag11 = document.createElement("input");
inptag11.setAttribute("type","button");
inptag11.setAttribute("value","+");
inptag11.setAttribute("class","form-control");
inptag11.setAttribute("id","buttonpls");
target16.append(inptag11);


const divcol12 = document.createElement("div");
divcol12.setAttribute("class","col-4 btn");
divcol12.setAttribute("id","col12");

target5.append(divcol12);

target17 = document.querySelector("#col12");
const inptag12 = document.createElement("input");
inptag12.setAttribute("type","button");
inptag12.setAttribute("value","-");
inptag12.setAttribute("class","form-control");
inptag12.setAttribute("id","buttonneg");
target17.append(inptag12);

const divcol13 = document.createElement("div");
divcol13.setAttribute("class","col-4 btn");
divcol13.setAttribute("id","col13");

target5.append(divcol13);

target18 = document.querySelector("#col13");
const inptag13 = document.createElement("input");
inptag13.setAttribute("type","button");
inptag13.setAttribute("value","*");
inptag13.setAttribute("class","form-control");
inptag13.setAttribute("id","buttonmul");
target18.append(inptag13);



const divcol14 = document.createElement("div");
divcol14.setAttribute("class","col-4 btn");
divcol14.setAttribute("id","col14");

target5.append(divcol14);

target19 = document.querySelector("#col14");
const inptag14 = document.createElement("input");
inptag14.setAttribute("type","button");
inptag14.setAttribute("value","/");
inptag14.setAttribute("class","form-control");
inptag14.setAttribute("id","buttondiv");
target19.append(inptag14);

const divcol15 = document.createElement("div");
divcol15.setAttribute("class","col-4 btn");
divcol15.setAttribute("id","col15");

target5.append(divcol15);

target20 = document.querySelector("#col15");
const inptag15 = document.createElement("input");
inptag15.setAttribute("type","button");
inptag15.setAttribute("value","clr");
inptag15.setAttribute("class","form-control");
inptag15.setAttribute("id","buttonclr");
target20.append(inptag15);


const divcol16 = document.createElement("div");
divcol16.setAttribute("class","col-4 btn");
divcol16.setAttribute("id","col16");

target5.append(divcol16);

target21 = document.querySelector("#col16");
const inptag16 = document.createElement("input");
inptag16.setAttribute("type","button");
inptag16.setAttribute("value","=");
inptag16.setAttribute("class","form-control");
inptag16.setAttribute("id","buttonequ");
target21.append(inptag16);



const txtfld = document.querySelector("#textfield");

const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
const btn4 = document.querySelector("#button4");
const btn5 = document.querySelector("#button5");
const btn6 = document.querySelector("#button6");
const btn7 = document.querySelector("#button7");
const btn8 = document.querySelector("#button8");
const btn9 = document.querySelector("#button9");
const btn0 = document.querySelector("#button0");
const btnplus = document.querySelector("#buttonpls");
const btnneg = document.querySelector("#buttonneg");
const btnmul = document.querySelector("#buttonmul");
const btnclr = document.querySelector("#buttonclr");
const btnequ = document.querySelector("#buttonequ");
const btndiv = document.querySelector("#buttondiv");



btn1.addEventListener("click",function(){

   let val = txtfld.value;
   let value =  val + "1";
   txtfld.value = value;
});

btn2.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "2";
    txtfld.value = value;
 });
 
 btn3.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "3";
    txtfld.value = value;
 });
 btn4.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "4";
    txtfld.value = value;
 });
 btn5.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "5";
    txtfld.value = value;
 });
 btn6.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "6";
    txtfld.value = value;
 });
 btn7.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "7";
    txtfld.value = value;
 });
 btn8.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "8";
    txtfld.value = value;
 });
 btn9.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "9";
    txtfld.value = value;
 });
 btn0.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + "0";
    txtfld.value = value;
 });



 btnplus.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + " + ";
    txtfld.value = value;
 });

 
 btnneg.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + " - ";
    txtfld.value = value;
 });

 btnmul.addEventListener("click",function(){

    let val = txtfld.value;
    let value =  val + " * ";
    txtfld.value = value;
 });

 btndiv.addEventListener("click",function(){
    let val = txtfld.value;
    let value =  val + " / ";
    txtfld.value = value;
 });


 btnclr.addEventListener("click",function(){
 
    txtfld.value = "";

 });


 btnequ.addEventListener("click",function(){

    let val = txtfld.value;

let val1 = val.split(" ");

console.log(val1);

var valfin;

if(val.includes("+")){

valfin = +val1[0] + +val1[2];

}else if (val.includes("*")){

valfin = +val1[0] * +val1[2];

}else if (val.includes("-")){

valfin = +val1[0] - +val1[2];

}else if (val.includes("/")){

valfin = +val1[0] / +val1[2];

}

txtfld.value = valfin;

 });





 




