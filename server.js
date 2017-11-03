var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');

});

app.listen(3001);