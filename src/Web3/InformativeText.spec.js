import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WarningText from './WarningText';

describe('WarningText', () => {

  it("displays the warning 'The Ujo Store is currently incompatible with mobile browsers.' if on a mobile device", () => {
    const warningText = shallow(
      <WarningText />,
    );
    expect(false).toEqual(true);
  });

  it("displays the warning 'The Ujo Store is currently only compatible with Chrome.' if device is not on Chrome", () => {
    const warningText = shallow(
      <WarningText />,
    );
    expect(false).toEqual(true);
  });

  xit('displays a warning if no web3 found', () => {
    const warningText = shallow(
      <WarningText />,
    );

    expect(false).toEqual(true);
  });

  // ...

});