import "./App.css";
import { TerminalTemplate } from "./components/TerminalTemplate";
import { WindowActionsProvider } from "./context/WindowActionsContext";

function App() {
  return (
    <WindowActionsProvider>
      <TerminalTemplate
        initialMessage={"hello world"}
        username={"nic@linux"}
        draggable={true}
      />
    </WindowActionsProvider>
  );
}

export default App;
