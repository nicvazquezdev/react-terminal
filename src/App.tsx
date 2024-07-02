import "./App.css";
import { TerminalPrompt } from "./components/TerminalPrompt/TerminalPrompt";
import { commands } from "./data/commands";

function App() {
  return (
    <>
      <TerminalPrompt initialCommands={commands} />
    </>
  );
}

export default App;
