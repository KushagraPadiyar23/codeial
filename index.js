const express=require('express');
const app=express();
const port=8000;

app.listen(port,function(err){
    if(err)
        console.log(`error in running the server on port: ${err}`);

     console.log(`server up and ruuning on port: ${port}`);   
});