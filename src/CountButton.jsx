import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus" && prev > 0) {
        return prev - 1;
      } else if (type === "plus" && prev < 5) {
        return prev + 1;
      } else {
        return prev;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button className="count-btn" onClick={handleClick} disabled={locked}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
