const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();


// Creating the API end point for the blockchain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/blockchain", function(req, res) {
  res.send(bitcoin);

  //res.send("blockchain API Working properly");
});

// API  endpoint for transactions
app.post("/transaction", function(req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({note: `Transaction will be added in block ${blockIndex}.`});

  console.log(req, body);
  console.log("---------------transactions-------------");
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`);

});

// API where new block creation takes place - mining
app.get("/mine", function(req, res) {
  //  console.log("miner");
  // res.send("Mining API endpoint working properly");
});

// We will know that the server is running when we see the Listening on port 3000...
app.listen(3000, function() {
  console.log("Listing on port 3000...");
  console.log(" ")
  console.log("           ------S----E----R----V----E-----R-------------");
  console.log("           --------------------I----S---------------------");
  console.log("           ---------R---U----N----N----I----N----G---------");
});






