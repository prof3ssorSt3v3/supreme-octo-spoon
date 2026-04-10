import { useEffect, useId, useReducer, useRef, useState } from 'react';
import ListItem from './ListItem';

export default function App() {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const addItem = (formData) => {
    let item = {
      item_id: crypto.randomUUID(),
      item_name: formData.get('item_name'),
    };
    console.log(item);
    setItems([item, ...items]);
  };

  return (
    <>
      <header>
        <h1>Reducers</h1>
      </header>
      <nav>
        <form action={addItem}>
          <input type="text" name="item_name" ref={inputRef} />
          <button>Add Item</button>
        </form>
      </nav>
      <main>
        <h2>Stuff has {items.length} ListItems</h2>
        <ul>
          {items.map((i) => (
            <ListItem key={i.item_id} item={i} />
          ))}
        </ul>
      </main>
    </>
  );
}
