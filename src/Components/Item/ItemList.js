import React from 'react';
import Item from '../../Components/Item/Item';

export default function ItemList({ items, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.text}
            <Item items={item} onDelete={onDeleteItem} />
          </li>
        );
      })}
    </ul>
  );
}
