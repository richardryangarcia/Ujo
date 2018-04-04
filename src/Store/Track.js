import React from 'react';

export default class TrackItem extends React.Component {
  render() {
    const trackPlaying = this.props.playing ? 'playing' : '';
    const iconStatus = this.props.playing ? 'icon-pause' : 'icon-small_play';
    return (
      <div className="track-container col-12">
        <div
          className="track-header row"
          role="button"
          tabIndex="-1"
          onClick={() => this.props.playTrack()}
        >
          <div className="col-1">
            <div className="track-index">{this.props.index}</div>
          </div>
          <div className="col-8">
            <div className="track-title" title={this.props.title}>{this.props.title}</div>
          </div>
          <div className="col-2">
            <div className="track-duration">{this.props.length}</div>
            <div className={`status-button ${trackPlaying} ${iconStatus}`} role="button" />
          </div>
        </div>
        <div className={`track-credits-container ${trackPlaying}`}>
          <ul>
            {this.props.credits.map(credit =>
              <li key={credit.substr(0, 8)}>{credit}</li>,
            )}
          </ul>
        </div>
      </div>
    );
  }
}