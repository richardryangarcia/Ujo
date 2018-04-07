import React from 'react';
import { connect } from 'react-redux';


export class BuyButton extends React.Component {

  render() {
    let buttonText;
    if (this.props.web3.get('isMobile') || !this.props.web3.get('isChrome')){
      buttonText = "Learn More"
    } else if (!this.props.web3.get('metamaskUnlocked')){
      buttonText = "How to Buy Album"
    } else {
      buttonText = "Buy Album"
    }

    return (
      <button type="button" className="gradient">{buttonText}</button>
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

  },
)(BuyButton);
