import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleMarkAllComplete,
    handleMarkAllIncomplete,
    handleResetInitial,
    handleRemoveAllItems,
  } = useItemsContext();

  const secondaryButtons = [
    { text: "Mark all as complete", onClick: handleMarkAllComplete },
    { text: "Mark all as incomplete", onClick: handleMarkAllIncomplete },
    { text: "Reset to initial", onClick: handleResetInitial },
    { text: "Remove all items", onClick: handleRemoveAllItems },
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
