import { useReducer } from 'react';
import ItemList from '../../Components/Item/ItemList';
import ItemForm from '../../Components/ItemForm/ItemForm';

const initialItems = [{ id: 0, text: 'hello' }];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: items.length + 1,
          text: action.text,
        },
      ];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shopping() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const add = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 1,
      text,
    });
  };

  return (
    <>
      <h1>Shopping List!</h1>
      <ItemForm addItems={add} items={items} />
      <ItemList items={items} />
    </>
  );
}
