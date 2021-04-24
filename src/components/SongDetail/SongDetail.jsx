import React from "react";
import { connect } from "react-redux";
import "./SongDetail.css";

function SongDetail({ selectedSong }) {
  return (
    <div>
      <h2>The selected song Is</h2>
      <p>{selectedSong && selectedSong.title}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
