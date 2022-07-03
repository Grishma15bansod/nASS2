const express= require('express');
const add=require('./api')
const sum= express();
sum.get('/getTecher', function(req,res){
    res.json(add.techer.tech1.email)
})
sum.get('/getstudents', function(req,res){
    res.json(add.students)
})
sum.listen(8080)