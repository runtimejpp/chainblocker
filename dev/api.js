const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Creating the API end point for the blockchain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:false
}));


app.get("/blockchain", function(req, res) {
  console.log(req, body);

  res.send("blockchain API Working properly");
});

// API  endpoint for transactions
app.post("/transaction", function(req, res) {
  console.log("transactions");
  res.send(`The amout of the transaction is ${req.body.amout} bitcoin.`);
});

// API where new block creation takes place - mining
app.get("/mine", function(req, res) {
  //  console.log("miner");
  // res.send("Mining API endpoint working properly");
});

// We will know that the server is running when we see the Listening on port 3000...
app.listen(3000, function() {
  console.log("Listing on port 3000...");
});
