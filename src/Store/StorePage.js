import React from 'react';
import { connect } from 'react-redux';
import ModalComponent from '../Modal/Modal';
import ArtistSection from './ArtistSection';
import AlbumSection from './AlbumSection';
import { displayModal, closeModal } from '../Modal/modalActions';
import {getPriceInUsd, checkForWeb3, checkMetaMask, checkForValidNetwork} from '../Web3/actions';
import { bindActionCreators } from 'redux';
import './store.css';

export class StoreSection extends React.Component {

  componentDidMount() {
     this.props.actions.checkForWeb3();
     this.props.actions.checkForValidNetwork();
     this.props.actions.checkMetaMask();
  }

  componentDidUpdate(){
    //this.props.actions.displayModal('hello');
    if (this.props.web3.get('validNetwork') && this.props.priceInUsd === null){
      this.props.actions.getPriceInUsd();
    }
  }

  render() {
    return (
      <div>
        <ModalComponent
          displayModal={this.props.modal.get('open')}
          message={this.props.modal.get('message')}
          closeModal={() => this.props.actions.closeModal()}
        />
        <div className="store-section">
          <div className="container">
            <div className="row">
              <ArtistSection />
              <AlbumSection />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    modal: state.get('modal'),
    web3: state.get('web3'),
    priceInUsd: state.get('priceInUsd')
  };
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({getPriceInUsd, checkForWeb3, checkMetaMask,closeModal,displayModal, checkForValidNetwork}, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreSection);
