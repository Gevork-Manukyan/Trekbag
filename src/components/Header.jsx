import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ numberOfCheckedItems, totalNumberOfItems }) {
  return <header>
    <Logo />
    <Counter count={numberOfCheckedItems} total={totalNumberOfItems} />
  </header>;
}
