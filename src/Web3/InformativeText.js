import React from 'react';
import { connect } from 'react-redux';
import {getPriceInUsd, checkForWeb3, checkMetaMask} from '../Web3/actions';


export class InformativeText extends React.Component {

  render() {
    let infoText = '';
    if (this.props.web3.get('isMobile')){
      infoText = "The Ujo Store is currently incompatible with mobile browsers."
    } else if (!this.props.web3.get('isChrome')){
      infoText = "The Ujo Store is currently only compatible with Chrome."
    } else if (!this.props.web3.get('metamaskUnlocked')){
      infoText = "MetaMask is required to purchase this album on Ethereum."
    }



    return (
      <div>
        {infoText.length == 0 ? <div></div> : <div className="alert alert-warning"><pre>{infoText}</pre></div>}
      </div>
    )
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
  )(InformativeText);
