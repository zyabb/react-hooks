import React from 'react';

const NewSongForm = ({ addSong }) => {
  const [value, setValue] = React.useState('');
  const onSubmit = event => {
    event.preventDefault();
    addSong(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>New Song</label>
      <input
        type="text"
        required
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
