import { useContext, useEffect, useState } from "react";
import { CounterContext } from "../context/CounterContext";

export default function InfoBox() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("InfoBox deve ser usado dentro do CounterContextProvider");
  }

  const { counter } = context;
  const [resto, setResto] = useState(0);

  useEffect(() => {
    setResto(counter % 2);
  }, [counter]);

  return (
    <div className="info-box">
      <p> O resto da divisão por 2 do contador é: {resto} </p>
    </div>
  );
}
