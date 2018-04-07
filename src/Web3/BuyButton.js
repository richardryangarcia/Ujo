import React from 'react';
import { connect } from 'react-redux';
import { displayModal } from '../Modal/modalActions';


export class BuyButton extends React.Component {

  render() {
    let buttonText;
    let infoText;
    if (this.props.web3.get('isMobile') || !this.props.web3.get('isChrome')){
      buttonText = "Learn More"
      infoText = "Ethereum payments powering the Ujo Store use web3 applications that are only available in a Chrome desktop browser. If you have access, open up Chrome on your desktop and return to localhost:3000 :) for instructions on how to buy."
    } else if (!this.props.web3.get('metamaskUnlocked')){
      buttonText = "How to Buy Album"
      infoText = "You need to be signed into your MetaMask account and be connected the correct ethereum network to buy the album. Please connect to the Main Network. Using Metamask, you can switch networks by clicking the MetaMask extension icon in your browser and then clicking the network name in the top left corner."
    } else {
      buttonText = "Buy Album"
      infoText = "all gucci"
    }

    return (
      <button type="button" className="gradient" onClick={() => this.props.displayModal(infoText)} >{buttonText}</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    web3: state.get('web3')
  };
}

export default connect(
  mapStateToProps,
  {
    displayModal
  },
)(BuyButton);
