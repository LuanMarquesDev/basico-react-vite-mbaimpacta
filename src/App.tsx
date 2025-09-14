import { CounterContextProvider } from "./context/CounterContext";
import Content from "./components/Content";

export default function App() {
  return (
    <CounterContextProvider>
      <Content />
    </CounterContextProvider>
  );
}
