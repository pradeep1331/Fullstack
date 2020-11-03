const countime = document.querySelector("#count");



const timer = document.createElement("p");
timer.setAttribute("id","count");

countime.appendChild(timer);


var time = 10;
var downloadTimer = setInterval(function(){

  if( time == 0){
    
    clearInterval(downloadTimer);
    timer.innerText =  "happy";
    
    
  }else{
  
  timer.innerText = time;
  time= time -1;
}

}, 1000);


downloadTimer();