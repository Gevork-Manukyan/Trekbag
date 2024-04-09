import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsContext } from "../lib/hooks";

export default function Header() {
  const { totalNumberOfItems, numCheckedItems } = useItemsContext();
  
  return (
    <header>
      <Logo />
      <Counter count={numCheckedItems()} total={totalNumberOfItems} />
    </header>
  );
}
