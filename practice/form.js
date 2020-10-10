
const form = document.getElementById("login-form");
const nameField = document.getElementById("name");
const adressfld1 = document.getElementById("address1");
const adressfld2 = document.getElementById("address2");
const cityfield = document.getElementById("City");
const provincefield = document.getElementById("Province");
const countryfield = document.getElementById("country");
const statefield = document.getElementById("state");





    form.addEventListener("submit",function(event){

        event.preventDefault();
    
        let hasError = false;
    
        if(!nameField.value){
           
            hasError = true;
        }
    
        if(!adressfld1.value){
            hasError = true;
        }
        
        if(!adressfld2.value){
            hasError = true;
        }

        if(!cityfield.value){
            hasError = true;
        }

        if(!provincefield.value){
            hasError = true;
        }
        if(!countryfield.value){
            hasError = true;
        }
     
        
        if(!hasError){

            alert("Thanks for submitting")
        }else{

            alert("Please fill all details");
        }
    
    });


