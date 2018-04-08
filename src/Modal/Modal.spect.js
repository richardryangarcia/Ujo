import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Modal from './Modal';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
  let wrapper;
  let message = "test messge"
  let display = 'open'
  beforeEach(() => {wrapper = shallow(<Modal displayModal={display} message={message}/>);});

  it("include 1 div with class warning-text", () => {
    expect(wrapper.find('div.warning-text')).to.have.lengthOf(1);
  });

});
