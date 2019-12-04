import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from '../Form';
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'One', id: 1 },
    { title: 'Two', id: 2 },
    { title: 'Three', id: 3 }
  ]);

  const addSong = songName => {
    setSongs([...songs, { title: songName, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>

      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
