
const sha256 = require('sha256'); 

function Blockchain() {
    this.chain = [];
    this.NewPendingTransaction = []; // 
    this.createNewBlock(100,'0','0'); // nonce 100 genesis block arbitray parameters
    // in a real createnewblock method we will pass in the true values of nonce prevblockhash nad hash
};


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


Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
};

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0; // nonce and hash will changing as we move through this data with out function
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0,4) !== '0000')
        nonce ++;
        hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
        console.log(hash);
         
    }
    return nonce;
     
};


module.exports = Blockchain;

