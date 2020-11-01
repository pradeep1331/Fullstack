let citiesSupported = {city1 : "Chennai", city2 : "Pune", city3 : "Mumbai"}

let chennaiHotels = [
    {hotel1:"xoxo",dish1:"soup",dish2:"fry",dish3:"cake"},
    {hotel2:"zozo",dish1:"puff",dish2:"sweet"},
    {hotel3:"pizzas",dish1:"pizza",dish2:"burger"}

]


let puneHotels = [{hotel1:"xoxo",dish1:"soup",dish2:"fry",dish3:"cake"},{hotel2:"toto",dish1:"puff",dish2:"sweet"},{hotel3:"soso",dish1:"pizza",dish2:"burger"}]

let mumbaiHotels = [{hotel1:"koko",dish1:"soup",dish2:"fry",dish3:"cake"},{hotel2:"momo",dish1:"puff",dish2:"sweet"},{hotel3:"yoyo",dish1:"pizza",dish2:"burger"}]

let selectedhotels = {}

const searchicon = document.querySelector("#search");

const searchtext = document.querySelector("#restraunts");

 let placeNode = document.querySelector("#Place");

 const hotelnode = document.querySelector(".hotel");
 
 const dishnode = document.querySelector(".dishes");

 const hoteltag = document.createElement("h2");
 hoteltag.setAttribute("id","hoteltag")


 

 
for (val in citiesSupported) {
    let option = document.createElement('option');
   
      option.text = citiesSupported[val];
      option.value = citiesSupported[val];   
      placeNode.append(option);

}




placeNode.addEventListener("change",function(){

    let selectedcity = placeNode.options[placeNode.selectedIndex].text;

 

    if(selectedcity == "Chennai"){

        selectedhotels = chennaiHotels;

    }else if(selectedcity == "Pune"){

        selectedhotels = puneHotels;
    }else if(selectedcity == "Mumbai"){

        selectedhotels = mumbaiHotels;

    }

})

let hotel = "";
let dishes = "";

let key = [];


searchicon.addEventListener("click",function(){



    let arrindex = selectedhotels.length;
    
    let text = searchtext.value;

    

     if(text == ""){
         alert("Please search the dish you require");
     }


    for(let i = 0 ; i<3;i++){
  
        key.push(Object.values(selectedhotels[i]));
      
      }

      let ispresent = Boolean;

for(let j =0 ;j<key.length;j++){

 


    ispresent = key[j].includes(text);

 if (ispresent == true){

   hotel = key[j];
   break;

 }

}

if(ispresent == false){

    alert("Dish is not avaialble")
 }

 let dishesAvailable = hotel.slice(1,hotel.length);
 let hotelname = hotel.slice(0,1);


 console.log(hotelname);
 console.log(dishesAvailable);

  let da = dishesAvailable.join(',');
  let hn = hotelname.join("");

  hoteltag.innerText = "Hotel "+ hn +" avaiable dishes are "+da ;

  dishnode.appendChild(hoteltag)


})







 