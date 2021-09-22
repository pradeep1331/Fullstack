
const tableHead = document.querySelector("#thead");
const tableBody = document.querySelector("#tbody");

async function getData(){

    tbody.innerHTML = "";
     
     res =  await fetch("https://api.cryptonator.com/api/full/btc-usd");

     data = await res.json();

     let marketsData = data.ticker.markets;

     console.log(marketsData)
     let counter = 1;
 

      marketsData.forEach(ele => {
        let html;
          console.log(ele);
          let market = ele.market;
          let price = ele.price;
          let volume = ele.volume;

          if(counter%2==0){
           html  = `<tr class="even">     
          <td>${counter}</td>
          <td>${market}</td>
          <td>${price}</td>
          <td>${volume}</td>
      </tr>`
          }else{

             html = `<tr>     
          <td>${counter}</td>
          <td>${market}</td>
          <td>${price}</td>
          <td>${volume}</td>
      </tr>`
          }
      tableBody.insertAdjacentHTML("beforeend",html);
       ++counter; 
     
      });

     

}


getData();