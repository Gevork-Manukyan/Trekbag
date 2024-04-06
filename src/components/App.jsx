import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initItems } from "../lib/constants";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(initItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      checked: false,
    };

    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);

    setItems(updatedItems);
  };

  const handleToggleItem = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }

      return item;
    });

    setItems(updatedItems);
  };

  const handleMarkAllComplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, checked: true };
    });

    setItems(updatedItems);
  };

  const handleMarkAllIncomplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, checked: false };
    });

    setItems(updatedItems);
  };

  const handleResetInitial = () => {
    setItems(initItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList
          items={items}
          handleToggleItem={handleToggleItem}
          handleRemoveItem={handleRemoveItem}
        />
        <Sidebar
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllIncomplete={handleMarkAllIncomplete}
          handleResetInitial={handleResetInitial}
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
