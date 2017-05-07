const express = require('express')
const router = require('./api/routes');
const bodyParser = require('body-parser')
const http = require('http')
const https = require('https')
const fs = require('fs')
const app = express();
const port = process.env.PORT || 3000
const forceSSL = require('express-force-ssl')

const ssl_options = {
  key: fs.readFileSync('./privkey.pem').toString(),
  cert: fs.readFileSync('./fullchain.pem').toString()
}
const server = http.createServer(app)
const secureServer = https.createServer(ssl_options, app)


const corsMiddleware = function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, HEAD, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.end();
  }
  return next();
}


app.use('/', corsMiddleware, forceSSL, express.static('app', {dotfiles: 'allow'}));
app.use(forceSSL)
app.use(bodyParser.json())
app.use(router)

secureServer.listen(port)
