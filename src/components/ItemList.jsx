export default function ItemList({ items }) {
  console.log(items)
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.checked} type="checkbox" />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
