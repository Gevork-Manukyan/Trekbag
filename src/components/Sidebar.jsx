import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleMarkAllComplete, handleMarkAllIncomplete, handleResetInitial, handleAddItem, handleRemoveAllItems }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup handleMarkAllComplete={handleMarkAllComplete} handleMarkAllIncomplete={handleMarkAllIncomplete} handleResetInitial={handleResetInitial} handleRemoveAllItems={handleRemoveAllItems} />
    </div>
  );
}
