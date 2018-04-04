import React from 'react';

import TracksSection from './TracksSection';


export default class AlbumSection extends React.Component {
  render() {
    return (
      <div className="col-12 col-lg-8">
        <div className="store-overlay album-section" ref={c => (this.section = c)}>
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="text-center">
                <div className="album-art" />
              </div>
              <p>{'Brooklyn-based Ujo Music are releasing their next big record and they need your help in getting the tech out the door. Please follow the attached specifications in order to provide the proper user experience for purchasing this hit record - Finding a Frontend Engineer!'}</p>
            </div>
            <div className="col-12 col-lg-7">
              <TracksSection />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
