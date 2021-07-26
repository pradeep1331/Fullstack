// create a new object for XML request 

let request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){

    let data = JSON.parse(this.response);
    
     //list of countries from AISA region
    let asiaCountries = data.filter(ele => ele.region ==="Asia");
    console.log(asiaCountries);

    //list of countries less than 2 lakh
    let cPopulation = data.filter(ele => ele.population < 200000);
    console.log(cPopulation);


    //countires using USD as currency
    let cUSD = data.filter((ele)=>{

        for(var i in ele.currencies){

            if(ele.currencies[i].code ==="USD"){

                return true;               
            }
        }
    });

    console.log(cUSD);

    //total population
    let tPopulation = data.reduce((accumalator,currentvalue)=>{

        return accumalator + currentvalue.population;
    },0);

    console.log(tPopulation);

};

