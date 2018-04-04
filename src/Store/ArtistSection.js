import React from 'react';

export default class ArtistSection extends React.Component {

  render() {
    return (
      <div className="col-12 col-lg-4">
        <div className="store-overlay artist-section text-center" style={{height: this.props.albumHeight ? this.props.albumHeight : 'auto' }}>
          <div className="row justify-content-center">
            <div className="artist-image" />
            <div className="col-12">
              <h4>Ujo Music</h4>
              <h5>1 album, 4 songs</h5>
            </div>
            <div className="col-12">
              <p>{'Ujo, is empowering music. They have been fighting the good fight for years now. But they need help. Are you the talent they have been looking for?'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
