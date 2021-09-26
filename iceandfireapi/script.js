let url = "https://www.anapioficeandfire.com/api/books/";
const caroTag = document.querySelector(".carousel-inner");
const caroIndic = document.querySelector(".carousel-indicators");


// To obtain data from fire and Ice API and modify DOM
 async function getData(){

    try{
          
        for(let i=1;i<=12;i++){
               
            let aurl = url+ i;


           let bkname =  await getbookData(aurl);

           let char1 =  await getcharDara(bkname.chars[0]);
           let char2 =  await getcharDara(bkname.chars[1]);
           let char3 =  await getcharDara(bkname.chars[7]);
           let char4 =  await getcharDara(bkname.chars[3]);
           let char5 =  await getcharDara(bkname.chars[18]);
           



           if( i ==1 ){
            let html = `<div class="carousel-item active" data-bs-interval="2000">
            <img src="Capture.PNG" width="800px" height="600px" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none  d-md-block">
              <h5 id="heading">${bkname.bookName}</h5>
              <p><span>Authored By : ${bkname.author}</span></br>
                 BN Num : ${bkname.isbn}</br>
                 Num of Pages : ${bkname.pageNum}</br>
                 Published By:${bkname.publisher}</br>
                 Date of Release: ${bkname.relDate}</br>
                 Characters : ${char1.name} <span id="alias">(alias:${char1.alias})</span>,${char2.name} <span id="alias">(alias:${char2.alias})</span>,${char3.name} <span id="alias">(alias:${char3.alias})</span>,${char4.name} <span id="alias">(alias:${char4.alias})</span>,
                 ${char5.name} <span id="alias">(alias:${char5.alias})</span>
                 </p>
              </div>
          </div>`;
          caroTag.insertAdjacentHTML("beforeend",html);      
          let html2 = ` <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
          caroIndic.insertAdjacentHTML("beforeend",html2);
        }
        else{
            let html = `<div class="carousel-item" data-bs-interval="4000">
            <img src="Capture.PNG" width="800px" height="600px" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 id="heading">${bkname.bookName}</h5>
              <p> <span>Authored By :${bkname.author}</span></br>
                 BN Num : ${bkname.isbn}</br>
                 Num of Pages : ${bkname.pageNum}</br>
                 Published By:${bkname.publisher}</br>
                 Date of Release: ${bkname.relDate}</br>
                 Characters : ${char1.name} <span id="alias">(alias:${char1.alias})</span>,${char2.name} <span id="alias">(alias:${char2.alias})</span>,${char3.name} <span id="alias">(alias:${char3.alias})</span>,${char4.name} <span id="alias">(alias:${char4.alias})</span>,
                 ${char5.name} <span id="alias">(alias:${char5.alias})</span>
                 </p>
              </div>
          </div>`;
          caroTag.insertAdjacentHTML("beforeend",html);    

          let html2 = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i-1}" aria-label="Slide ${i}"></button>`;
          caroIndic.insertAdjacentHTML("beforeend",html2)


        }      

        }

    }catch(err){
        console.log(err,"Unable to retrive data")
    }
  

}

// To get Data from fire and ice api
async function getbookData(url){

  let res = await fetch(url);

  let data = await res.json();
  
  let bookName = data.name;
  let author = data.authors[0];
  let isbn = data.isbn;
  let pageNum = data.numberOfPages;
  let publisher = data.publisher;
  let relDate = data.released;

  let chars = data.characters;
   




  //console.log(chars);

  //console.log(bookName,author,isbn,pageNum,publisher,relDate);

  return {bookName,author,isbn,pageNum,publisher,relDate,chars};

};

// Function to get Characters from provided url
async function getcharDara(urls){

 try{
    let res2 = await fetch(urls);

    let data2 = await res2.json();

     let name = data2.name;

     let alias = data2.aliases[0];

      return {name,alias};
    
  }catch(err){
      console.log(err,"unable to fetch Character")
  }

}

getData();