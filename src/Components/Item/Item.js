import React from 'react';
import { useState } from 'react';

export default function Item() {
  const [edit, setEdit] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setEdit('');
  };

  return (
    <div onClick={handleClick}>
      <input value={edit} onChange={(e) => setEdit(e.target.value)} />
      <button onClick={() => setEdit(false)}>Edit</button>
    </div>
  );
}
