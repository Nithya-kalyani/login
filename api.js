var express = require ('express');
var app = express ();
var port = process.env.PORT || 9800;
var cors = require('cors');
var bodParser= require('body-parser');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var mongourl = "mongodb+srv://Nithya:mongo@123@cluster0.o3fi9.mongodb.net/edurekainternship?retryWrites=true&w=majority";
var db;
var path = require('path');

app.use(cors());

app.use(bodParser.urlencoded({extended:true}));
app.use(bodParser.json())

app.get('/',(req,res) => {
    res.send("Api is working")
});

app.post('/login',(req,res) => {
    console.log(req.body);
    db.collection('login').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('posted')
    })
})


MongoClient.connect(mongourl,(err,connection)=>{
    if(err) throw err
    db = connection.db('usermanagement');
    app.listen(port,(err)=>{
        if(err)throw err
        console.log(`Server is running in port ${port}`)
    })
})