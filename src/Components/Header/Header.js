import React from 'react';
import { useList } from '../../Context/ListContext';

export default function Header() {
  const { items } = useList();
  return (
    <header>
      <h3>Header</h3>
      <span>{items.length} Items</span>
    </header>
  );
}
