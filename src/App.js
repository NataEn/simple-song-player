import React from "react";
import SongList from "./components/SongList/SongList";
import SongDetail from "./components/SongDetail/SongDetail";
const App = () => {
  return (
    <div className="App">
      <SongList />
      <SongDetail />
    </div>
  );
};
export default App;
