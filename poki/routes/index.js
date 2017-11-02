var express = require('express');
var router = express.Router();
var request = require('request');

var pokemon = [
  {
    name: 'Admin',
    avatarUrl: 'You can use this space to chat with your friends!'
  },
  {
    name: 'Admin',
    avatarUrl: 'Welcome to our message board!'

  },
 
];

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
  res.send(pokemon);
});



var politics = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod";
router.get('/politics', function(req,res) {
  console.log("In politics");
  request(politics).pipe(res);
});

router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 

module.exports = router;
