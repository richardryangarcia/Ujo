import React from 'react';
import { connect } from 'react-redux';
import ModalComponent from '../Modal/Modal';
import ArtistSection from './ArtistSection';
import AlbumSection from './AlbumSection';
import {  closeModal } from '../Modal/modalActions';
import {getPriceInUsd, checkForWeb3, checkMetaMask} from '../Web3/actions';

import './store.css';

export class StoreSection extends React.Component {

  componentDidMount() {
     //console.log("Store Page Mounted");
     // checkForWeb3();
     checkMetaMask();
     getPriceInUsd(connect);

  }


  render() {
    return (
      <div>
        <ModalComponent
          displayModal={this.props.modal.get('open')}
          message={this.props.modal.get('message')}
          closeModal={() => this.props.closeModal()}
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
    modal: state.get('modal')
  };
}

export default connect(
  mapStateToProps,
  {
    closeModal
  }
)(StoreSection);
