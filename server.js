var express = require('express');
var app = express();


app.use(express.static(__dirname+'/public_two'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;


/*app.get('/helloWorld', function(req, res){
    res.send('hello world still me!');
});*/

app.listen(port, ipaddress);