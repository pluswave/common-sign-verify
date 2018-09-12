const btcjs = require('bitcoinjs-lib');
const btclib = require('./btc-lib');


var ecpair = btcjs.ECPair.makeRandom();

var wifString = ecpair.toWIF();
var address = btcjs.payments.p2pkh( { pubkey: ecpair.publicKey }).address;

console.log(wifString);
console.log(address);

var message = 'hello, test me!';

var sign = btclib.sign(message, wifString);

var result = btclib.verify(message, sign, address );

console.log(result);