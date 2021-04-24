import React, { Component } from "react";
import "./SongList.css";
import { connect } from "react-redux";
import { selectSong } from "../../actions/selectSong";

//this component will recieve not only the current selected state- by the mapToProps function but also the redux dispatch function
const SongList = (props) => {
  console.log(props);
  return (
    <div>
      <h2>SongList</h2>
      <ul>
        {props.songs.map((song, index) => (
          <li key={index}>
            title:{song.title}, duration: {song.duration}
            <button onClick={() => props.selectSong(song)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// class SongList extends Component {
//   // console.log(this.props);
//   render() {
//     return <div>SongList</div>;
//   }
// }

//mapStateTpProps receives the state and returns an Object containing relevant parts of the state
//
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs, favoriteTitle: state.favoriteTitle };
};
const mapDispatchToProps = { selectSong };

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
