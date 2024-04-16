import { useItemsStore } from "../store/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllComplete = useItemsStore((state) => state.markAllComplete);
  const markAllIncomplete = useItemsStore((state) => state.markAllIncomplete);
  const resetInitial = useItemsStore((state) => state.resetInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    { text: "Mark all as complete", onClick: markAllComplete },
    { text: "Mark all as incomplete", onClick: markAllIncomplete },
    { text: "Reset to initial", onClick: resetInitial },
    { text: "Remove all items", onClick: removeAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ onClick, text }) => {
        return (
          <Button
            key={text + onClick.toString()}
            onClick={onClick}
            buttonType="secondary"
          >
            {text}
          </Button>
        );
      })}
    </section>
  );
}
