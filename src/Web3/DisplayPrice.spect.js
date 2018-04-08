import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import DisplayPrice from './DisplayPrice';
import reducer from '../MainReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { createStore, compose, applyMiddleware } from 'redux';


const initialState = fromJS({
  priceInUsd: null
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(
    thunk,
    createLogger({ stateTransformer: state => state.toJS() }),
  )),
);

describe('DisplayPrice', () => {
  let wrapper;

  it("display ", () => {
    const wrapper = shallow(
      <DisplayPrice store={store}/>,
    );
    console.log(wrapper.find('div.info-price'));
    expect(wrapper.find('div.info-price').length).toBe(1);
  });

});
