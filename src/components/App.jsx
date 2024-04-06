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
        <ItemList items={items} />
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
