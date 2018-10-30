var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'dist/Minimus')));

app.get('dist/Minimus', function(req,res){
   res.sendFile('index.html', {root: path.join(__dirname, './dist/Minimus')})
});

app.listen(8080, function(){
    console.log((new Date()) + " Server is listening on port 8080");
});
