const cells = document.querySelectorAll(".cell");
var isnext = true;
var count = 0;

const win = document.querySelector(".winner");

var checkstatus = function(){

   const tpleft =  cells[0].classList[2];
   const tpmid =  cells[1].classList[2];
   const tpright =  cells[2].classList[2];
   const midleft =  cells[3].classList[2];
   const midmid =  cells[4].classList[2];
   const midright =  cells[5].classList[2];
   const lowleft =  cells[6].classList[2];
   const lowmid =  cells[7].classList[2];
   const lowright =  cells[8].classList[2];

   console.log(tpleft);
  // console.log(tpmid);
  // console.log(tpright);

   if(tpleft && tpleft === tpmid && tpleft === tpright){
    win.classList.add(tpleft);
     
   } else if (midleft && midleft === midmid && midleft === midright){
    win.classList.add(midleft);

   }else if(lowleft && lowleft === lowmid && lowleft === lowright){
    win.classList.add(tpleft);

   }
   else if(lowleft && lowleft === lowleft && lowleft === lowright){
    win.classList.add(lowleft);

}else if(tpleft && tpleft === midleft && tpleft === lowleft){
    win.classList.add(tpleft);

}else if(tpmid && tpmid === midmid && tpmid === lowmid){
    win.classList.add(tpmid);

}else if(tpright && tpright === midright && tpright === lowright){
    win.classList.add(tpright);

}else if(tpleft && tpleft === midmid && tpleft === lowright){
    win.classList.add(tpleft);

}else if(tpright && tpright === midmid && tpright === lowleft){
    win.classList.add(tpright);

}else if(tpleft && tpmid && tpright &&lowleft && lowmid && lowright &&
    lowleft && lowmid && lowright){
    win.classList.add("N");

    }

}

var handleclick = (e) => {

  var location=  e.target.classList[1];

   // console.log(location)
   if(e.target.classList[2]=="x" || e.target.classList[2]=="0"){
       return;
   }

   if(isnext){
       e.target.classList.add("x");
       checkstatus();
       isnext = !isnext;
       
   }else{

    e.target.classList.add("o");
    checkstatus();
    isnext = !isnext;
   }
}


 for (var cell of cells){

    cell.addEventListener("click",handleclick);

 }
