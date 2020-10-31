import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details:</h3>{' '}
      <p>
        Title: {song.title} <hr />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStatProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStatProps)(SongDetail);
