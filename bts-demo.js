var bitsharesjs = require('bitsharesjs');
var btslib = require('./bts-lib');

const randomstring = require('randomstring');

var seed = randomstring.generate(128);

var pKey = bitsharesjs.PrivateKey.fromSeed(seed);

var wifString = pKey.toWif();
var pubkeyString = pKey.toPublicKey().toPublicKeyString('BTS');

var message = 'hello, test me!';

var sign = btslib.sign(message, wifString);

var result = btslib.verify(message, sign, pubkeyString, 'BTS');

console.log(result);
