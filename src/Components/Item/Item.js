import React from 'react';

export default function Item({ items, onDelete }) {
  return (
    <div>
      <button type="button" onClick={() => onDelete(items.id)}>
        Delete
      </button>
    </div>
  );
}
