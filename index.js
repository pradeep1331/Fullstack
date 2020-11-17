const express = require("express");
const bodyPaser = require("body-parser");
const app = express();
const fs =  require("fs");
const myDate = new Date();



// to read text files in directory
const dir = 'D:\\nodejspracrice\\filereadtask';

app

.use(bodyPaser.json())
.get("/readfile",(request,response)=>{

    response.send("Read file page")

    fs.readdir(dir, (err, files) => {
        if (err) {
            throw err;
        }
    
        files.forEach(file => {
            

            for (const defaultElement of files) {

                            
                if(defaultElement.includes(".txt")){

                    console.log(defaultElement);
                }

              }

        });
    });
})



//to create file with file with timestamp

.get("/createfile",(request,response) => {

 response.send("create file page");

 let filename = myDate.getTime().toString() + ".txt";

 let content = myDate.getDate().toString() + myDate.getTime().toString();

 fs.appendFile(filename, content, function (err) {
    if (err) throw err;
    console.log('file created');
  });

    
})

.listen(process.env.PORT)