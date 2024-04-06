import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleToggleItem,
  handleRemoveItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.map((item) => {
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
