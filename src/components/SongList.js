import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from '../Form';
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'One', id: 1 },
    { title: 'Two', id: 2 },
    { title: 'Three', id: 3 }
  ]);
  const [age, setAge] = useState(23);

  const addSong = songName => {
    setSongs([...songs, { title: songName, id: uuid() }]);
  };

  useEffect(() => {
    console.log('rerenders');
  }, [songs]);

  useEffect(() => {
    console.log('ageeegeg');
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>

      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}> CLICK </button>
    </div>
  );
};

export default SongList;
