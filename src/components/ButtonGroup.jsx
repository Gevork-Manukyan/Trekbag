import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleResetInitial,
  handleRemoveAllItems,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
