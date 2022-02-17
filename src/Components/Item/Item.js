import React from 'react';
import { useState } from 'react';

export default function Item({ items, onChange, onDelete }) {
  const [editing, setEditing] = useState(false);
  return (
    <div className="div">
      <button
        className="deleted"
        type="button"
        onClick={() => onDelete(items.id)}
        aria-label={`Delete ${items.text}`}
      >
        Delete
      </button>
      <br></br>
      <br></br>
      {editing && (
        <>
          <input
            value={items.text}
            aria-label="Edit input"
            onChange={(e) => {
              onChange({ ...items, text: e.target.value });
            }}
          />
          <button onClick={() => setEditing(false)} aria-label="Changes">
            Save
          </button>
        </>
      )}
      {!editing && (
        <>
          {items.text}
          <button onClick={() => setEditing(true)} aria-label={`Edit ${items.text}`}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}
