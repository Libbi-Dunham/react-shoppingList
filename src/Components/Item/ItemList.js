import React from 'react';
import Item from '../../Components/Item/Item';

export default function ItemList({ items, onEditItem, onDeleteItem }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <p key={item.id}>
            {item.text}
            <Item items={item} onChange={onEditItem} onDelete={onDeleteItem} />
          </p>
        );
      })}
    </div>
  );
}
