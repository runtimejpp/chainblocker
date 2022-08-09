
/*
    This is a short test of the constructor function that we created to demonstrate new block tran

    transactions.

*/

const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
/*
const previousBlockHash = 'arbitrary343_input_1_Billion';
const currentBlockData = [
    {
        amount: 101,
        sender:'JKHKJGF*(BJKD784',
        recipient: 'KJHDIU&*DIUG'

    },
    {
        amount: 780,
        sender : 'JKBFH&*OBFO*&G*F',
        recipient: 'LIUGUY^&IDFG^'

    },
    {
        amount: 400,
        sender: 'IO:UHJD:IUHDIUH',
        recipient: '&&TYD&*TDUIH&****Y'

    }

];
const nonce = 100;
console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));
*/
console.log(bitcoin);

// console.log(bitcoin.chain[1]);

/*const Blockchain = require('./blockchain');
const bitcoin = Blockchain();

const previousBlockHash = 'arbitrary343_input_1_Billion';
const currentBlockData = [
    {
        amount: 101,
        sender:'JKHKJGF*(BJKD784',
        recipient: 'KJHDIU&*DIUG'

    },
    {
        amount: 780,
        sender : 'JKBFH&*OBFO*&G*F',
        recipient: 'LIUGUY^&IDFG^'

    },
    {
        amount: 400,
        sender: 'IO:UHJD:IUHDIUH',
        recipient: '&&TYD&*TDUIH&****Y'

    }

];
 // according to the proof of work the nonce value is 2740 and when we get this we generate correct hash using nonce with 0000
 
// bitcoin.hashBlock(previousBlockHash,currentBlockData,2740)
// with the ccorrect nonce the proof of work is easy to varify 

console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,2740));
 */

