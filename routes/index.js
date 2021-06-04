var express = require('express');
var router = express.Router();

var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  client.hgetall("bitcoin:shares:roundCurrent", function(err, data) {
    res.send(data);
	});
});

router.get('/:id',function (req, res, next) {
  key = "bitcoin:shares:round" + req.params.id;
  client.hgetall(key, function(err, data) {
    if (data == null){
      res.send({"message":"null data"});
    } else {
      res.send(data);
    }
	});
})

module.exports = router;
