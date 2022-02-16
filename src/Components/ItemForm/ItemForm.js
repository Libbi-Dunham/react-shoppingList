import React from 'react';
import { useState } from 'react';

export default function ItemForm({ addItems }) {
  const [addItem, setaddItem] = useState('');
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
        <div>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}
