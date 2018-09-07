'use strict'

const bitcoinjs = require('bitcoinjs');
const wif = require('wif');
const common = require('./common');

function sign(m, wifString)
// m: message to be signed
// wif: bitcoin private key wif 
{
    //const keyPair = bitcoin.ECPair.fromWIF(wif)
    // const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
    //const 
    return common.sign(m, wif.decode(wifString).privateKey.toString('hex'));
}

function verify(m, sig, address, network)
// m: message to be signed
// sig: hex encoded signature
// address: eth address
{
    network = network || 'bitcoin';
    var pubkey = common.recoverPubkey(m, sig);
    var ecpair = ECPair.fromPublicKeyBuffer(new Buffer(pubkey, 'hex'), network);
    ecpair.compressed = true;
    var address_to_verified = ecpair.getAddress();
    if( address_to_verified != address ) {
        return false;
    }
    return common.verify(m, sig, pubkey);
}

module.exports = {
    sign: sign,
    verify: verify
}

