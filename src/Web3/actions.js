/* global web3 */
import OracleContracts from 'ujo-contracts-oracle';
import Truffle from 'truffle-contract';

let oracle;

const initializeContract = () => {
  oracle = Truffle(OracleContracts.USDETHOracle);
  oracle.setProvider(web3.currentProvider);
};

export const checkForWeb3 = () => {
  let action = typeof web3 !== 'undefined' ? {type: 'WEB3_FOUND'} : {type: 'WEB3_NOT_FOUND'};

  return action;
};

//update state to true if on rinkeby network
export const checkForValidNetwork = () => {
  let networkTrueOrFalse = false
  if (typeof web3 !== 'undefined' && web3.version.network === '4') {
      networkTrueOrFalse = true;
  }
  let action = {
    type: 'NETWORK_CHECK',
    validNetwork: networkTrueOrFalse
  };

  return action;
}

export const checkMetaMask = () => {
  let metamaskTrueOrFalse = false
  if (typeof web3 !== 'undefined' && web3.eth.accounts.length > 0){
    metamaskTrueOrFalse = true;
  }

  let action = {
    type: 'METAMASK_CHECK',
    metamaskUnlocked: metamaskTrueOrFalse
  };

  return action;
};

export const getPriceInUsd = () => {

  initializeContract();

  return async(dispatch) => {
    dispatch({
      type: 'GETTING_PRICE_IN_USD'
    });
    oracle.deployed().then((instance) => {
        let contractamundo = instance;
        return contractamundo.getPrice();
    }).then((result) => {
      //success
      let action = {
        type: 'GOT_PRICE_IN_USD',
        priceInETHString: result
      }

      dispatch(action);
    });
  }
}
