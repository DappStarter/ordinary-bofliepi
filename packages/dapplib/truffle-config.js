require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain evil grid globe flock tiger'; 
let testAccounts = [
"0x3d31af4fe3a53f2b1f8647772ee3b8b89978822315b8b123ddaf61e7d92c1c7a",
"0x747f251e615b4f7e9533936bb7a831f5d0702335ee843f8f23a1721dc21d10ec",
"0x3ace240723b69690ac9c7a5c8aa905736c3bf369d1f7df1a785d0d762db6956e",
"0xe55de696f652a5ed4eb6bc392ed228ec50c218d8ad4e37f6283217b5686abdb0",
"0x8691b996cfe1fd821214605f3b9d2d5739ee658001b463daf99197854a5ff21e",
"0x7e3d06ec7785686978af4edd5896b4fec4df4444c35d219baa5e0de563dcd03a",
"0xb07d62f2fe3bda2468e72ac03ae06721320b7b60841d5ab81164e90ff4bc0f2f",
"0x26715ff9aa329829455b45419e0a0450fad1900033667b4ffd9310441be3b38d",
"0x7b93af670daae2ddb749c61a4a84d27ecdfc3baaa7efd368ca654c2982f51d3b",
"0x664b80bbfa1a2afb6bd7a6092121cb09691c12949de98008b30d28d223418c8f"
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

