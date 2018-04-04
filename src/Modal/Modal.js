import React from 'react';

import './modal.css';

export default class Modal extends React.Component {

  render() {
    const display = this.props.displayModal ? 'open' : '';
    return (
      <div className={`modal-background ${display}`}>
        {this.props.displayModal
          ? (<div className="modal-container">
            <div className="exit-modal" role="button" tabIndex="-1" onClick={() => this.props.closeModal()} />
            <div className="modal-title">Warning</div>
            <div className="text-center warning-text">
              {this.props.message.split('\n').map((w, i) => <p key={i}>{w}</p>)}
            </div>
          </div>)
          : null
        }
      </div>
    );
  }
}
