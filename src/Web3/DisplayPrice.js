import React from 'react';
import { connect } from 'react-redux';


export class DisplayPrice extends React.Component {

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  render() {
    const album_price = 10 //this would be a variable defined by artists for each song or album
    const priceNumeric = this.isNumeric(this.props.priceInUsd);
    let displayPrice;
    if (priceNumeric){
      let priceInEth = (album_price / this.props.priceInUsd)
      displayPrice = Number(priceInEth).toFixed(5);
    }
    else {
      displayPrice = this.props.priceInUsd;
    }

    return (
      <div id="price" className="info-price">{displayPrice} ETH <span className="usd">(10 USD)</span></div>
    );
  }
}


function mapStateToProps(state) {
  return {
    priceInUsd: state.get('priceInUsd')
  };
}

export default connect(
  mapStateToProps,
  {

  },
)(DisplayPrice);
