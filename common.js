'use strict'

const bitsharesjs = require('bitsharesjs');

function addprefix(m)
{
    return "\ncommon identiciation sign\n" + m;
}

function toSignBuffer(m)
{
    return new Buffer(addprefix(m), 'utf-8');
}

function sign(m, sk)
// m : message to be signed (utf-8 string)
// sk: a PrivateKey (hex string)
// returns: hex-encoded signature
{
    var privKey = bitsharesjs.PrivateKey.fromBuffer(new Buffer(sk, 'hex'));
    return  bitsharesjs.Signature.signBuffer(toSignBuffer(m), privKey).toHex();
}

function verify(m, sig, pk)
// m : message to be verified (utf-8 string)
// sig: hex-encoded signature
// pk: public key (hex string) 
// returns: true of false
{
    var signature = bitsharesjs.Signature.fromHex(sig);
    var pubkey = bitsharesjs.PublicKey.fromHex(pk);
    return signature.verifyBuffer(toSignBuffer(m), pubkey);
}

function recoverPubkey(m, sig)
// m : message to be verified (utf-8 string)
// sig: hex-encoded signature
// return: hex-encoded pubkey without compression (start with 04)
{
    var signature = bitsharesjs.Signature.fromHex(sig);
    var pubkey = signature.recoverPublicKeyFromBuffer(toSignBuffer(m));
    return pubkey.toUncompressed().toHex();
}


module.exports = {
    sign: sign,
    verify: verify,
    recoverPubkey: recoverPubkey
}

