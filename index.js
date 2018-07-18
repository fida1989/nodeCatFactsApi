var http = require('http');
var fs = require('fs');
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var x;

http.createServer(function (req, res) {  
   fs.readFile('facts.json', function(err, data) {
    var myJSON = JSON.parse(data);
    x = Math.floor((Math.random() * myJSON.data.length));
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(myJSON.data[x]));
    res.end(); 
  });
}).listen(port,ipaddress);  