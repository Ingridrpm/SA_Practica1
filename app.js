var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);

exports.login = (usuario, contra) => {
  if (usuario == 'admin' && contra=='admin'){
    return true;
  }
  return false;
}
