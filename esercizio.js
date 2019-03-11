const express=require('express');
const app=express();
app.get('/',function (req,res){
res.sendFile(__dirname + '/public/index.html');
});

app.get('/login',function (req,res){
res.sendFile(__dirname + '/public/login.html');
});
app.listen(process.env.PORT || 3000);

