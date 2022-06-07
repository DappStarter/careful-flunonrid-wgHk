require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth often modify hover kiwi orient sponsor'; 
let testAccounts = [
"0xd825bd797214edc1aa13e0127734ed71c930e1b45f46a145fbb5a0667ddbe704",
"0x7b734e02302089908b54d6b9ef5cf1e38f8cfecc4efd45d6496ad3c7600e8eae",
"0x63121ae89df126a5c595d95f2a1a43e7595b0612e2517d8a300902b29395d317",
"0xf7f0e2006a46d2f7ef0d23511ba2e4fe8cf228cabecfc2b322c2101f5f2e1cd5",
"0xf1d0fffbd78d717aa42d727b725f23d1db4b434c3327b1f27b2956cd8d6f3d74",
"0x1e2630c0e757676c248de1c3102198c9b9cb8cbd3dbef0038194f26f2764a1db",
"0xc470ddc424cb3cebcb336421acad1ada1e5ac95040c8fc9fd4f2ccf0d8459307",
"0xb52cbca5544baf879d7cfb4e8cce4064ede3c528f49d00e2da70dd1f89e95505",
"0xa0576235cb8adf70b999ca24ad800cba0c3debcb3fb4f6de86a875cbf61d5027",
"0x0f072fa7f2d0c9669b829bf7cc308465f1273d40d6fff2baa572e4f81191ca0c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

