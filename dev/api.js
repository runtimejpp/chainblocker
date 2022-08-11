const express = require('express');
const app = express();

// Creating the API end point for the blockchain

app.get("/blockchain", function (req, res) {
   
});

// API  endpoint for transactions
app.post("/transaction", function (req, res) {});

// API where new block creation takes place - mining
app.get("/mine", function (req, res) {});

// We will know that the server is running when we see the Listening on port 3000...
app.listen(3000, function () {
    console.log("Listeining on port 3000...");
});
