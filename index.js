const express = require('express'),
      bodyParser = require('body-parser'),
      router = require('./api/routes');

let app = express();

app.use('/',express.static('app'));

app.listen(3000, err => err ? 
  console.log(err) : 
  console.log("Running: 3000")
);


