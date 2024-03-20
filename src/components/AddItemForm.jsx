import Button from "./Button";
import { useRef, useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item cannot be empty!");
      inputRef.current.focus(); 
      return;
    }

    onAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  const handleChange = (event) => {
    setItemText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input ref={inputRef} value={itemText} onChange={handleChange} autoFocus />
      <Button>Add to list</Button>
    </form>
  );
}
