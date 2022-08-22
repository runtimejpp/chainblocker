const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const uuid = require("uuid/v1");
const bitcoin = new Blockchain();
const nodeAddress = uuid().split("-").join(" ");


// Creating the API end point for the blockchain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/blockchain", function(req, res) {
  res.send(bitcoin);
  res.send("blockchain API Working properly");
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
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock["hash"];
    const currentBlockData = {
        transactions: bitcoin.pendingTransaction,
        index: lastBlock["index"] + 1 
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);
    bitcoin.createNewTransaction(12.5,"00",nodeAddress );
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    // send a response to the sender of the block 
    res.json({
      note: "New Block mined successfully",
      block: newBLock  

    });
});

// We will know that the server is running when we see the Listening on port 3000...

app.listen(3000, function() {
  console.log("*Listening on port 3000. . . ");
  
});






