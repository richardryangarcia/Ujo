import React from 'react';
import { connect } from 'react-redux';

import BuyButton from './BuyButton';
import InformativeText from './InformativeText';
import { displayModal } from '../Modal/modalActions';


export class TxSection extends React.Component {

  static learnMore() {
    window.open('https://medium.com/@UjoMusic/f258e6034226');
  }

  buyAlbum() { alert('Buying Album'); }

  render() {
    return (
      <div>
        {/*
          CODE GOES HERE
          Note: make sure that you are only requesting
          price when connected to the proper network
        */}
        <InformativeText />
        <BuyButton />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {

  };
}

export default connect(mapStateToProps, {
  displayModal,
})(TxSection);
