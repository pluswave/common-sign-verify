'use strict'

const elib = require('eth-lib');
const common = require('./common');

function sign(m, pk)
// m: message to be signed
// pk: privatekey start with '0x' 
{

    return common.sign(m, pk.slice(2));
}

function verify(m, sig, address)
// m: message to be signed
// sig: hex encoded signature
// address: eth address
{
    var pubkey = common.recoverPubkey(m, sig);
    var pubkey_eth = '0x' + pubkey.slice(2);
    var pkhash = elib.Hash.keccak256(pubkey_eth);
    var address_to_verified = '0x' + pkhash.slice(-40);
    if( address_to_verified.toLowerCase() != address.toLowerCase()) {
        return fasle;
    }
    return common.verify(m, sig, pubkey);
}

module.exports = {
    sign: sign,
    verify: verify
}

