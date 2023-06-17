import "./styles.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <h1>TO DO APP</h1>
      <div className="to-do-list">
        <h2>Things to Do</h2><br/>
        <form onSubmit={onSubmit}>
          <input className="form-control task" type="text" name="item" placeholder="Add a New task" required/><br/>
          <button className="btn btn-primary"> Add </button>
        </form><br/>
        <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className="delete btn btn-primary" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}

export default App;
