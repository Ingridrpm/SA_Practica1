var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hola',function(req,res) {
  res.send("No se deberia mostrar");
});

app.listen(4000);


