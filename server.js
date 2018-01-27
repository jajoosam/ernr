// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var pug = require('pug');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var googl = require('node-googl');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('view engine', 'pug');

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', function (req, res) {
    console.log(req.body);
  var info = {};
googl.shorten("https://ernr.ml/mine.html#" + req.body.address + req.body.id, 'AIzaSyCPYjwoXEGBFjH7Ew79zLQr7zdABL_Meww', function(err, shortenedUrl) {
    if (err) {
        throw err;
    }
    
    console.log('Shortened URL: ' + shortenedUrl);
    info["mine"] = "https://ernr.ml/#$"+shortenedUrl.substr(15);
    console.log(info);
    res.render("info", info);
});
    // var info = {
    //   mine: 
    // }
   
  });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
