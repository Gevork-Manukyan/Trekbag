import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStore } from "../store/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter count={items.filter((item) => item.checked).length} total={items.length} />
    </header>
  );
}
