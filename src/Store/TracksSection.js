import React from 'react';
import ReactDOM from 'react-dom';
import Amplitude from './amplitude';
import moment from 'moment';

import TrackItem from './Track';
import TrackList from './trackList';
import TxSectionComponent from '../Web3/TxSection';
import DisplayPriceComponent from '../Web3/DisplayPrice';

export default class TracksSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: TrackList,
      indexPlaying: null,
      playing: false,
      tracksHeight: null,
    };
  }

  componentWillMount() {
    Amplitude.init({
      songs: this.state.tracks,
      callbacks: {
        after_next: () => this.afterNextSongAmplitude(),
      },
    });
    setTimeout(() => {
      const tracksDomNode = ReactDOM.findDOMNode(this.tracks);
      const tracksBound = tracksDomNode.getBoundingClientRect();
      this.setState({ tracksHeight: tracksBound.height });
    }, 50);
  }

  afterNextSongAmplitude() {
    if (this.state.indexPlaying === this.state.tracks.length - 1) {
      this.setState({ indexPlaying: null, playing: false }, () => {
        Amplitude.pause();
      });
    } else {
      this.setState({ indexPlaying: this.state.indexPlaying + 1 });
    }
  }

  playSongAtIndex(i) {
    if (i === this.state.indexPlaying && this.state.playing) {
      this.setState({ indexPlaying: null, playing: false }, () => {
        Amplitude.pause();
      });
    } else {
      const song = Amplitude.getSongByIndex(i);
      this.setState({ indexPlaying: i, playing: true }, () => {
        Amplitude.playNow(song);
      });
    }
  }

  playOrPause() {
    if (this.state.playing) {
      this.setState({ playing: false }, () => {
        Amplitude.pause();
      });
    } else {
      if (!this.state.indexPlaying) {
      }
      this.playSongAtIndex(this.state.indexPlaying ? this.state.indexPlaying : 0);
    }
  }

  render() {
    return (
      <div>
        <div className="play-status-container">
          {this.state.playing
            ? <span className="icon-pause" role="button" onClick={() => this.playOrPause()} tabIndex="-1" />
            : <span className="icon-big_play" role="button" title="Play All" onClick={() => this.playOrPause()} tabIndex="-1" />
          }
        </div>

        <h3>Finding a Frontend Engineer</h3>
        <div className="feature">
          <span className="descriptor">release date: </span>
          <span>{moment().add(10, 'days').format("MM/DD/YYYY")}</span>
        </div>
        <div className="feature">
          <span className="descriptor">label: </span>
          <span>Ujo Records</span>
        </div>
        <div className="tracks-section"
          ref={c => (this.tracks = c)}
        >
          <div className="row">
            {this.state.tracks.map((track, i) =>
              (<TrackItem
                key={i}  // eslint-disable-line
                index={i + 1}
                title={track.title}
                length={track.length}
                playing={(i === this.state.indexPlaying && this.state.playing)}
                credits={track.credits}
                playTrack={() => this.playSongAtIndex(i)}
              />),
            )}
          </div>
        </div>
        <div className="row buy-album-container text-right">
          <div className="col-12">
            <DisplayPriceComponent />
            <p className="disclaimer-text">*price might differ due to volatility of exchange rate & gas cost</p>
            <TxSectionComponent />
          </div>
        </div>
      </div>
    );
  }
}
