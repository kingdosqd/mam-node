var express = require('express');
var router = express.Router();

var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  client.hgetall("bitcoin:btc2mam", function(err, data) {
    res.send(data);
	});
});

module.exports = router;
