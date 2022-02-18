import ItemList from '../../Components/Item/ItemList';
import ItemForm from '../../Components/ItemForm/ItemForm';
import { useList } from '../../Context/ListContext';

export default function Shopping() {
  const { items, add, edit, handledelete } = useList();

  return (
    <>
      <h1>Shopping List!</h1>
      <p>~Add an Item to the List~</p>
      <ItemForm addItems={add} items={items} />
      <ItemList items={items} onEditItem={edit} onDeleteItem={handledelete} />
    </>
  );
}
