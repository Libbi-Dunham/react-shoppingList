import React from 'react';
import { useList } from '../../Context/ListContext';

export default function Header() {
  const { items, clear } = useList();
  return (
    <header>
      <div>
        <span>{items.length} Items</span>
        <button
          onClick={() => {
            clear();
          }}
        >
          Clear
        </button>
      </div>
    </header>
  );
}
