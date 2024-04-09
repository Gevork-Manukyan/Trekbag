import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by checked",
    value: "checked",
  },
  {
    label: "Sort by unchecked",
    value: "unchecked",
  },
];

export default function ItemList({
  items,
  handleToggleItem,
  handleRemoveItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() =>
    [...items].sort((a, b) => {
      if (sortBy === "checked") {
        return b.checked - a.checked;
      }

      if (sortBy === "unchecked") {
        return a.checked - b.checked;
      }

      return;
    }), [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(newOption) => setSortBy(newOption.value)}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onToggle={handleToggleItem}
            onClickRemove={handleRemoveItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onToggle, onClickRemove }) {
  return (
    <li className="item">
      <label>
        <input
          onClick={() => onToggle(item.id)}
          checked={item.checked}
          type="checkbox"
        />
        {item.name}
      </label>

      <button
        onClick={() => {
          onClickRemove(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
