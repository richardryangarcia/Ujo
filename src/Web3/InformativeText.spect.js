import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InformativeText from './InformativeText';

describe('InformativeText', () => {

  it("displays the warning 'The Ujo Store is currently incompatible with mobile browsers.' if on a mobile device", () => {
    const InformativeText = shallow(
      <InformativeText />,
    );
    expect(false).toEqual(true);
  });

  it("displays the warning 'The Ujo Store is currently only compatible with Chrome.' if device is not on Chrome", () => {
    const InformativeText = shallow(
      <InformativeText />,
    );
    expect(false).toEqual(true);
  });

  xit('displays a warning if no web3 found', () => {
    const InformativeText = shallow(
      <InformativeText />,
    );

    expect(false).toEqual(true);
  });

  // ...

});
