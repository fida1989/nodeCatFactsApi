var http = require('http');
var fs = require('fs');
const port = 80;
var x;

http.createServer(function (req, res) {  
   fs.readFile('facts.json', function(err, data) {
    var myJSON = JSON.parse(data);
    x = Math.floor((Math.random() * myJSON.data.length));
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(myJSON.data[x]));
    res.end(); 
  });
}).listen(port);  

console.log('Running on port '+ port);