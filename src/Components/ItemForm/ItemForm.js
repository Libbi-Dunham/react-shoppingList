import React from 'react';
import { useState } from 'react';

export default function ItemForm() {
  const [addItem, setaddItem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setaddItem('');
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
          <input className="button" type="submit" value="Save" />
        </div>
      </div>
    </form>
  );
}
