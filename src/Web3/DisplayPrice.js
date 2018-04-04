import React from 'react';
import { connect } from 'react-redux';


export class DisplayPrice extends React.Component {

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  render() {
    const priceNumeric = this.isNumeric(this.props.priceInEth);
    const displayPrice = priceNumeric ? Number(this.props.priceInEth).toFixed(5) : this.props.priceInEth;
    return (
      <div className="info-price">{displayPrice} ETH <span className="usd">(10 USD)</span></div>
    );
  }
}


function mapStateToProps(state) {
  return {
    priceInEth: state.get('priceInEth'),
  };
}

export default connect(
  mapStateToProps,
  {

  },
)(DisplayPrice);
