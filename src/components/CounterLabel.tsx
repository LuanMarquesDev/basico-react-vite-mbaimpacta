import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CounterLabel() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(
      "CounterLabel deve ser usado dentro do CounterContextProvider"
    );
  }

  return <span>Já foram clicados {context.counter} vezes!</span>;
}
