var ethlib = require('./eth-lib');

var accounts = require('web3-eth-accounts');

// create a random account
var account = accounts.prototype.create();

var message = 'hello, test me!';

var sign = ethlib.sign(message, account.privateKey);

var result = ethlib.verify(message, sign, account.address);

console.log(result);
