let time = document.getElementById("Heading");


setTimeout(() => {
   time.innerText ="10";

   setTimeout(() => {
    time.innerText ="9";
     setTimeout(() => {
        time.innerText ="8";
        setTimeout(() => {
            time.innerText ="7";
            setTimeout(() => {
                time.innerText ="6";
                setTimeout(() => {
                    time.innerText ="5";
                    setTimeout(() => {
                        time.innerText ="4";
                        setTimeout(() => {
                            time.innerText ="3";
                            setTimeout(() => {
                                time.innerText ="2";
                                setTimeout(() => {
                                    time.innerText ="1";
                                    
                                }, 1000);
                                
                            }, 2000);
                            
                        }, 3000);
                        
                    }, 4000);
                    
                }, 5000);
                
            }, 6000);
            
        }, 7000);
        
    }, 8000);
    
 }, 9000);
    
}, 10000);

