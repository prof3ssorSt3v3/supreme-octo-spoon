import { useRef, useState } from 'react';
import ListItem from './ListItem';
import { STATUS } from './utils';

function reducer(state, action) {
  //the function that takes a new state value
  //and an action request
  //this could be in a context object
}

export default function App() {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const addItem = (formData) => {
    let item = {
      item_id: crypto.randomUUID(),
      item_name: inputRef.current.value, // or formData.get('item_name'),
      status: STATUS.PLACED,
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
            <ListItem key={i.item_id} item={i} reducer={reducer} />
          ))}
        </ul>
      </main>
    </>
  );
}
