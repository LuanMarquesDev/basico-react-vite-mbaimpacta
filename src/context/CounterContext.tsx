import React, { createContext, useState } from "react";

interface CounterContextType {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export function CounterContextProvider({ children }: Props) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
