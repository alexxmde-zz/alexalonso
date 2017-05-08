const express = require('express')
const router = require('./api/routes');
const bodyParser = require('body-parser')
const http = require('http')
const https = require('https')
const fs = require('fs')
const app = express();
const port = process.env.PORT || 3000


const corsMiddleware = function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, HEAD, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.end();
  }
  return next();
}


app.use('/', corsMiddleware, express.static('app', {dotfiles: 'allow'}));
app.use(bodyParser.json())
app.use(router)

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  } else {
    console.log(`Listening to port ${port}`)
  }
})
