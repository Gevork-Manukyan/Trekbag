import { createContext, useEffect, useState } from "react";
import { initItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initItems
  );

  const totalNumberOfItems = items.length;

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

  const numCheckedItems = () => {
    return items.filter((item) => item.checked).length;
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return <ItemsContext value={{
    items,
    totalNumberOfItems,
    handleAddItem,
    handleRemoveItem,
    handleToggleItem,
    handleMarkAllComplete,
    handleMarkAllIncomplete,
    handleResetInitial,
    handleRemoveAllItems,
    numCheckedItems
  }}>{children}</ItemsContext>;
}
