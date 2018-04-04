import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import StoreComponent from './Store/StorePage';
import reducer from './MainReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

const initialState = fromJS({
  priceInUsd: 'open MetaMask for ',
  web3: {
    validNetwork: false,
    metamaskUnlocked: false,
    isMobile: (typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1),
    isChrome: (navigator.userAgent.indexOf('Chrome') > -1),
    hasWeb3: false,
  },
  modal: {
    open: false,
    message: null,
  },
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(
    thunk,
    createLogger({ stateTransformer: state => state.toJS() }),
  )),
);

ReactDOM.render(
  <Provider store={store}>
    <StoreComponent />
  </Provider>,

  document.getElementById('root'),
);
registerServiceWorker();
