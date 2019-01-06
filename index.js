const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 5000
const db = 'mongodb://fida:fida1989@cluster0-shard-00-00-zgjze.mongodb.net:27017,cluster0-shard-00-01-zgjze.mongodb.net:27017,cluster0-shard-00-02-zgjze.mongodb.net:27017/AppData?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

mongoose.connect(db, {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

app.get('/', function (req, res) {
  Cat.find({}).exec(function(err,facts){
    if (err) {
      console.log(err);
      res.send('Error');
  } else {
      console.log(facts.length);
      const x = Math.floor((Math.random() * facts.length));
      res.json(facts[x]);
  }
  });
});






app.listen(port, () => console.log(`listening on port ${port}!`))