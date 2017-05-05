const express = require('express')
const router = require('./api/routes');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/', express.static('app'));
const corsMiddleware = function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, HEAD, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.end();
  }
  return next();
}
function requireHTTPS(req, res, next) {
    if (!req.secure) {
        //FYI this should work for local development as well
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use('/', corsMiddleware, requireHTTPS, express.static('app'));
app.use(requireHTTPS)
app.use(router)
app.use(corsMiddleware)

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listening to port ${port}`)
  }
})

