export default function ItemList({ items, handleRemoveItem }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} onClickRemove={handleRemoveItem} />;
      })}
    </ul>
  );
}

function Item({ item, onClickRemove }) {
  return (
    <li className="item">
      <label>
        <input checked={item.checked} type="checkbox" />
        {item.name}
      </label>

      <button onClick={() => {onClickRemove(item.id)}}>❌</button>
    </li>
  );
}
