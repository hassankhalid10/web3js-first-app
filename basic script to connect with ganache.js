let  { Web3 } = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

//get balance of account
web3.eth.getBalance("0xA291ce2740AbAfC0e8275333715E5840264a9Eeb").then(function(result){console.log(web3.utils.fromWei(result,"ether"));});

//send transaction:
web3.eth.sendTransaction({from: "0xA291ce2740AbAfC0e8275333715E5840264a9Eeb", to: "0x3c6b4D99B859D1657EF66BD73C7CB3750Fa91E59",value: web3.utils.toWei("5", "ether")});