import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButton from "./CountButton";
import ButtonContainer from "./ButtonContainer";
import { useEffect, useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space" && count < 5) {
        setCount(count + 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${count >= 5 ? "card--limit" : ""}`}>
      <Title count={count} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
