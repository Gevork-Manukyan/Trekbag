import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          checked: false,
        };

        set((state) => ({ items: [...state.items, newItem] }));
      },

      removeItem: (itemId) => {
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== itemId);
          return { items: updatedItems };
        });
      },

      toggleItem: (itemId) => {
        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (item.id === itemId) {
              return { ...item, checked: !item.checked };
            }

            return item;
          });

          return { items: updatedItems };
        });
      },

      markAllComplete: () => {
        set((state) => {
          const updatedItems = state.items.map((item) => {
            return { ...item, checked: true };
          });

          return { items: updatedItems };
        });
      },

      markAllIncomplete: () => {
        set((state) => {
          const updatedItems = state.items.map((item) => {
            return { ...item, checked: false };
          });

          return { items: updatedItems };
        });
      },

      resetInitial: () => {
        set(() => ({ items: initItems }));
      },

      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
    }),
    {
      name: "items",
    }
  )
);
