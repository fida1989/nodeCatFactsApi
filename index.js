var http = require('http');
var fs = require('fs');
var x;
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
  fs.readFile('facts.json', function (err, data) {
    var myJSON = JSON.parse(data);
    x = Math.floor((Math.random() * myJSON.data.length));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(myJSON.data[x]));
    res.end();
  });
}).listen(PORT, () => console.log(`Listening on ${PORT}`));  