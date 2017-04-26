const express = require('express');
let router = new express.Router();

router.get('/', (req,res) => res.send("OK"));


module.exports = router;
