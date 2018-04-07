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
