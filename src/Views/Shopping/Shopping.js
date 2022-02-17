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
    case 'edit': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
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

  const edit = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };

  const handledelete = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <>
      <h1>Shopping List!</h1>
      <p>~Add an Item to the List~</p>
      <ItemForm addItems={add} items={items} />
      <ItemList items={items} onEditItem={edit} onDeleteItem={handledelete} />
    </>
  );
}
