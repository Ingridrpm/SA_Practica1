var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World prueba 2222");
});

app.listen(4000);


