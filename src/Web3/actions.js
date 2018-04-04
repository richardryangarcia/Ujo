/* global web3 */
import OracleContracts from 'ujo-contracts-oracle';
import Truffle from 'truffle-contract';

let oracle;

const initializeContract = () => {
  console.log("in initalize contract");
  oracle = Truffle(OracleContracts.USDETHOracle);
  oracle.setProvider(web3.currentProvider);
  console.log(oracle);
};

export const checkForWeb3 = () => {
  console.log("in price get")
  console.log(initializeContract());
  //console.log("checking for web 3");
  let action;
  if (typeof web3 !== 'undefined') {
    action = {
      type: 'WEB3_FOUND'
    }
  } else {
    action = {
      type: 'WEB3_NOT_FOUND'
    }
  }

  // console.log("web3 result " + action.type);
  return action;
};

export const checkMetaMask = () => {
  // console.log("checking for metamask and valid network");

  let networkTrueOrFalse;
  let metamaskTrueOrFalse;
  let action;
  // use Web3 to check for an account and if on a valid network

  // console.log(web3.eth.accounts);
  if (web3.eth.accounts.length > 0 ) {
    metamaskTrueOrFalse = true;
  } else {
    metamaskTrueOrFalse = false;
  }


  // console.log(web3.version.network);
  if (web3.version.network > 0 ){
    networkTrueOrFalse = true
    //console.log("has network");
  } else {
    networkTrueOrFalse = false
  }

  action = {
    type: 'METAMASK_CHECK',
    validNetwork: networkTrueOrFalse,
    metamaskUnlocked: metamaskTrueOrFalse
  };

  // console.log("checking network result " );
  // console.log(action);
  return action;
};

// spoofed web3 call for the price
export const getPriceInUsd = () => async dispatch => {


  dispatch({
    type: 'GETTING_PRICE_IN_USD',
    priceInETHString: 'null',
  });
  setTimeout(async () => {
    dispatch({
      type: 'GOT_PRICE_IN_USD',
      priceInETHString: '10',
    });
  }, 8000);
};
