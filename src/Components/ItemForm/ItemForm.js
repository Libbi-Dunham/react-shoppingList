import React from 'react';
import { useState } from 'react';

export default function ItemForm({ addItems }) {
  const [addItem, setaddItem] = useState('');
  console.log(addItem);
  const handleSubmit = (e) => {
    e.preventDefault();
    setaddItem('');
    addItems(addItem);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-item">
        <label>Add: </label>
        <input
          className="add"
          type="text"
          placeholder="item"
          value={addItem}
          onChange={(e) => setaddItem(e.target.value)}
        />
        {/* <div>
          <input className="button" type="submit" value="Save" />
        </div> */}
      </div>
    </form>
  );
}
