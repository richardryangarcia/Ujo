/* global web3 */
import OracleContracts from 'ujo-contracts-oracle';
import Truffle from 'truffle-contract';

let oracle;

const initializeContract = () => {
  console.log("initalizing contracts");
  oracle = Truffle(OracleContracts.USDETHOracle);
  oracle.setProvider(web3.currentProvider);
};

export const checkForWeb3 = () => {
  let action = typeof web3 !== 'undefined' ? {type: 'WEB3_FOUND'} : {type: 'WEB3_NOT_FOUND'};

  return action;
};

//update state to true if on rinkeby network
export const checkForValidNetwork = () => {
  let networkTrueOrFalse = web3.version.network === '4' ? true : false;

  let action = {
    type: 'NETWORK_CHECK',
    validNetwork: networkTrueOrFalse
  };

  return action;
}

export const checkMetaMask = () => {
  let metamaskTrueOrFalse = web3.eth.accounts.length > 0  ? true : false;

  let action = {
    type: 'METAMASK_CHECK',
    metamaskUnlocked: metamaskTrueOrFalse
  };

  return action;
};

export const getPriceInUsd = async (dispatch) =>  {

  initializeContract();

  dispatch({
    type: 'GETTING_PRICE_IN_USD'
  });

  oracle.deployed().then(function(instance) {
      let contractamundo = instance;
      return contractamundo.getPrice();
  }).then(function(result) {
    //success
    let action = {
      type: 'GOT_PRICE_IN_USD',
      priceInETHString: result
    }

    dispatch(action);
  });

};
