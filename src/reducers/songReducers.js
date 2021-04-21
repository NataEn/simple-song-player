export const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Song 2", duration: "2:05" },
    { title: "Song 3", duration: "2:15" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};