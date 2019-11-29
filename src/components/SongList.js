import React, { useState } from 'react';
import uuid from 'uuid/v1';
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'One', id: 1 },
    { title: 'Two', id: 2 },
    { title: 'Three', id: 3 }
  ]);
  const addSong = () => {
    setSongs([...songs, { title: 'New Song', id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add song</button>
    </div>
  );
};

export default SongList;
