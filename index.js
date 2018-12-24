const express = require('express')
const app = express()
var fs = require('fs');
var x;
const port = process.env.PORT || 5000

app.get('/', function (req, res) {
  fs.readFile('facts.json', function (err, data) {
    if (err) {
      res.send("Error!")
    } else {
        var myJSON = JSON.parse(data);
        x = Math.floor((Math.random() * myJSON.data.length));
        res.send(JSON.stringify(myJSON.data[x]));
    }
  })
})

app.listen(port, () => console.log(`listening on port ${port}!`))