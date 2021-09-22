
const buttonTag = document.querySelector("#btn1");
const imgTag = document.querySelector("#card-img");
const hTag = document.querySelector("#card-name");


buttonTag.addEventListener("click",getData);

async function getData(){
  try{
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")

    const data = await res.json();
    console.log(data);

     let url = data.cards[0].image;

     let card = data.cards[0].value +" "+data.cards[0].suit; 

    imgTag.setAttribute("src",url);
    hTag.innerHTML= card;
  }
  catch(err){
      console.log(err,"Unable to get Cards")
  }

}