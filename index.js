var express = require('express')
var path = require('path');
var app = express();
var swig = require('swig');
app.set('view engine', 'swig');
app.engine('swig', swig.renderFile);
app.use(express.static(__dirname + '/public'));

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(__dirname + '/public')
  console.log('Listening at http://%s:%s', host, port);
});

app.get('/main',function(req,res){
	res.header('Content-Type','application/json');
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.sendFile(__dirname + 'public/view/index.html')
})


