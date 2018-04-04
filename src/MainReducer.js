import { fromJS } from 'immutable';

const MainReducer = (state = fromJS({}), action) => {
  switch (action.type) {
    case 'GETTING_PRICE_IN_USD':
      console.log("hello");
      return state.set("priceInUsd", null);
    case 'GOT_PRICE_IN_USD':
    console.log("hello");
      return state.set("priceInUsd", action.priceInETHString);
    case 'WEB3_FOUND':
      return state.setIn(['web3','hasWeb3'], true);
    case 'WEB3_NOT_FOUND':
      return state.setIn(['web3','hasWeb3'], false);
    case 'METAMASK_CHECK':
      return state.setIn(['web3', 'validNetwork'], action.validNetwork)
                  .setIn(['web3', 'metamaskUnlocked'], action.metamaskUnlocked);
    case 'OPEN_MODAL':
      return state.setIn(['modal', 'open'], true)
                  .setIn(['modal', 'message'], action.message);
    case 'CLOSE_MODAL':
      return state.setIn(['modal', 'open'], false);
    default:
      return state;
  }
};


export default MainReducer;
