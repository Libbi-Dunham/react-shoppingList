import React from 'react';

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}
