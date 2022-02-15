import React from 'react';
// import Item from '../../Components/Item/Item';

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}
