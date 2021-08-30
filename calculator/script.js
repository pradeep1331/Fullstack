const inputField = document.querySelector(".txt");

const Buttonc = document.querySelector(".grid-items1");
const Buttonmodulo = document.querySelector(".grid-items2");
const Button7 = document.querySelector(".grid-items3");
const Button8 = document.querySelector(".grid-items4");
const Button9 = document.querySelector(".grid-items5");
const Buttonmulti = document.querySelector(".grid-items6");
const Button4 = document.querySelector(".grid-items7");
const Button5 = document.querySelector(".grid-items8");
const Button6 = document.querySelector(".grid-items9");
const Buttonminus = document.querySelector(".grid-items10");
const Button1 = document.querySelector(".grid-items11");
const Button2 = document.querySelector(".grid-items12");
const Button3 = document.querySelector(".grid-items13");
const Buttonplus = document.querySelector(".grid-items14");
const Buttondiv = document.querySelector(".grid-items15");
const Button0 = document.querySelector(".grid-items16");
const Buttonequals = document.querySelector(".grid-items17");


Buttonc.addEventListener("click",()=>{
    inputField.value = "";
});


Button1.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "1";
    inputField.value = value;
});

Button2.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "2";
    inputField.value = value;
});

Button3.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "3";
    inputField.value = value;
});

Button4.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "4";
    inputField.value = value;
});

Button5.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "5";
    inputField.value = value;
});
Button6.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "6";
    inputField.value = value;
});
Button7.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "7";
    inputField.value = value;
});
Button8.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "8";
    inputField.value = value;
});
Button9.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "9";
    inputField.value = value;
});
Button0.addEventListener("click",()=>{
    let val = inputField.value;
    let value = val + "0";
    inputField.value = value;
});

Buttonplus.addEventListener("click",()=>{

    let val = inputField.value;
    let value = val + "+";
    inputField.value = value;

});

Buttonmodulo.addEventListener("click",()=>{

    let val = inputField.value;
    let value = val + "%";
    inputField.value = value;

});
Buttonmulti.addEventListener("click",()=>{

    let val = inputField.value;
    let value = val + "*";
    inputField.value = value;

});
Buttonminus.addEventListener("click",()=>{

    let val = inputField.value;
    let value = val + "-";
    inputField.value = value;

});

Buttondiv.addEventListener("click",()=>{

    let val = inputField.value;
    let value = val + "/";
    inputField.value = value;

});



Buttonequals.addEventListener("click",()=>{
    let val = inputField.value;
    let y   = eval(val);
    inputField.value = y;
});


inputField.addEventListener("keyup",(event)=>{
  
   
    let numarr = ["1","2","3","4","5","6","7","8","9","0","+","-","/","%","*","Shift"];

     if(!numarr.includes(event.key)){
         console.log(event.key)
        inputField.value = "";
        alert("Only numbers are allowed");
     }
    
});