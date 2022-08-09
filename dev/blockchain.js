/*
Using the constructor function over a class is javascript simply
 due trying to keep it as vanilla as possible: classes in javascript are 
a sugar coat to vanilla js syntax.

Either way class vs constructor function will get the job done
most languages would use a class , however.
*/
const sha256 = require('sha256'); 

function Blockchain() {
    this.chain = [];
    this.NewPendingTransaction = []; // 
    this.createNewBlock(100,'0','0'); // nonce 100 genesis block arbitray parameters
    // in a real createnewblock method we will pass in the true values of nonce prevblockhash nad hash
};
/*
At this point the block chain is set and can never be changed (nonce)
nonce is a proof of work which is a number that 
that is created and signals that the block was created 
 which is proof that the black was created in a legit way using proof of work methods
hash is the data returned from passing a transaction into our hashing functions
all transactions run through this block 
*/

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.NewPendingTransactions, 
        nonce: nonce,
        hash: hash, 
        previousBlockHash: previousBlockHash
    };
    this.NewPendingTransactions = []; // We need to clear our the block each use 
    this.chain.push(newBlock); // send out block into chain and return  new block ready for hashing 
    return newBlock;
      
};
   
    
    

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
};
// created the model for a new transaction that is then pushed             
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const NewTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  };
    this.NewPendingTransactions.push(newTransaction); // pushed into pending transaction 
    return this.getLastBlock()['index'] + 1; // returns the block object index property 
  // returns the number of the block that the transaction will be added to 
};
/* 
Taking a block data and using the hashing function sha256 to convert block data 
into a hashed string of text of unknown length 
import hash lib from npm 
a nonce is a number so we have to make nonce to string () 
and then calling the sha 256 lib to hash our program 
*/
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
};
/*  This function will repeadedly hash previous block hash ,data and nonce  until it finds the     correct hash ,we increment the nonce until the hash beings with 0000 and thus function 
    and this is what makes blockchain secure 
    essentially the chain is just a list of blocks,
    the block has to have proof of work which is what avoids the fraud,
*/ 
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0; // nonce and hash will changing as we move through this data with out function
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0,4) !== '0000'){ // may take 10 times ir 100 thousdand and here is     where cpu energy comes into factor ,,,,in large systems 
        nonce ++;
        hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
        console.log(hash);
         // creating new hash over and over until 0000 is hit with function
         // run our hash over and over but with differnt nonce value, nonce ++
    }
    return nonce;
      // the nonce is the proof of work , not the hash 
};


module.exports = Blockchain;

