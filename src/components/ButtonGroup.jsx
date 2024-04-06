import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleResetInitial,
  handleRemoveAllItems,
}) {
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
