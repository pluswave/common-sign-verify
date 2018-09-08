# General library to identify a user of some blockchain.


## Sign process

1. input : a message to be signed (m)
1. input : a private key of some blockchain (sk)
1. m prefixed with "\nidentification common sign\n" (m')
1. sha256(m')
1. sign(sha256(m'), sk) => signature(s)

## Verify process

1. input: a message to be signed (m)
1. input: a public key or deviation (i.e. address) h(pk0)
1. input: signature (s)
1. m prefixed with "\nidentification common sign\n" (m')
1. sha256(m')
1. recover public key from sha256(m') and s (pk1)
1. if h(pk1) != h(pk0), terminate process with fail
1. verify (sha256(m'), s, pk1)

