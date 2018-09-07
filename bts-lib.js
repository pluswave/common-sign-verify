'use strict'

const bitsharesjs = require('bitsharesjs');
const common = require('./common');

function sign(m, wifString)
// m: message to be signed
// wifString, start with 5
{
    return common.sign(m, bitsharesjs.PrivateKey.fromWif(wifString).toHex());
}

function verify(m, sig, pubkeyString, prefix)
// m: message to be signed
// pubkeyString: a pubkey string from some blockchain
// prefix: pubkey prefix of that blockchain ('BTS' for bitshares mainnet)
{
    prefix = prefix || 'BTS';
    var pubkey = bitsharesjs.PublicKey.fromPublicKeyString(pubkeyString, prefix);
    return common.verify(m, sig, pubkey.toHex());
}

module.exports = {
    sign: sign,
    verify: verify
}

