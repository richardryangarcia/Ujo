import React from 'react';


export default class BuyButton extends React.Component {

  /*
    CODE GOES HERE
    Note: make sure that you are only requesting
    price when connected to the proper network
  */

  render() {
    return (
      <button type="button" className="gradient">Buy Album</button>
    );
  }
}
