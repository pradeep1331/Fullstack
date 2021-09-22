const containerTag = document.getElementById("container");


fetch("https://jsonplaceholder.typicode.com/photos")
.then((response)=>response.json())
.then((data)=>{
    for(var i=0;i<50;i++){
    var imgUrl = data[i].url;
    var title = data[i].title.slice(0,30);
    const html =  ` <div class="items"><p>${title}</p><img src="${imgUrl}" width="100" heigth="100"><br><div>`;
  containerTag.insertAdjacentHTML("afterbegin",html);

    }
  
})