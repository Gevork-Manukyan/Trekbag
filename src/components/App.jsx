import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initItems } from "../lib/constants";
import { useState } from "react";

function App() {
  const [items, setItems] =  useState(initItems);

  const handleResetInitial = () => {
    setItems(initItems);
  }

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      checked: false,
    }
    
    return [...items, newItem]
  }

  const hanldeRemoveAllItems = () => {
    setItems([]);
  }

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar handleAddItem={handleAddItem} />
      </main>

      <Footer />
    </>
  );
}

export default App;
