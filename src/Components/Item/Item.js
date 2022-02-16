import React from 'react';
import { useState } from 'react';

export default function Item({ items, onChange, onDelete }) {
  const [editing, setEditing] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => onDelete(items.id)}>
        Delete
      </button>
      <br></br>
      <br></br>
      {editing && (
        <>
          <input
            value={items.text}
            onChange={(e) => {
              onChange({ ...items, text: e.target.value });
            }}
          />
          <button onClick={() => setEditing(false)}>Save</button>
        </>
      )}
      {!editing && (
        <>
          {items.text}
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
