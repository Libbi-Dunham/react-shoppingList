import { createContext, useContext, useReducer } from 'react';

const initialItems = [{ id: 0, text: 'hello' }];
const refresh = [];
export const ListContext = createContext();
const ListProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

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
      case 'clear': {
        return refresh;
      }
      default: {
        throw Error(`Unknown action: ${action.type}`);
      }
    }
  }

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

  const clear = (taskId) => {
    dispatch({
      type: 'clear',
      id: taskId,
    });
  };

  return (
    <ListContext.Provider value={{ items, add, edit, handledelete, clear }}>
      {children}
    </ListContext.Provider>
  );
};

const useList = () => {
  const context = useContext(ListContext);

  if (!context) throw new Error('component has to be wrapped with a ListProvider');
  return context;
};

export { ListProvider, useList };
