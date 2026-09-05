export default function DestinationItem({ cityKey, label, isSelected, onClick }) {
  return (
    <button
      className={`destination-item${isSelected ? " selected" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
