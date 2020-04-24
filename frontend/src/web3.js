import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
var web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:8545'));
//var web3 = new Web3(window.web3.currentProvider)


export default web3;