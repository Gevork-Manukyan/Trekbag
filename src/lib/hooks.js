import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

// Removes need to constantly import 'useContext' and 'ItemsContext'
export function useItemsContext() {
  const context = useContext(ItemsContext);

  // Throws an error if the component trying to use the context isn't wrapped by the provider
  if (!context) {
    throw new Error(
      "useItemsContext must be used within a ItemsContextProvider"
    );
  }

  return context;
}
