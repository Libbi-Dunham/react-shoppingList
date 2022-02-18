import React from 'react';
import Item from '../../Components/Item/Item';

export default function ItemList({ items, onEditItem, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.text}
            <Item items={item} onChange={onEditItem} onDelete={onDeleteItem} />
          </li>
        );
      })}
    </ul>
  );
}
