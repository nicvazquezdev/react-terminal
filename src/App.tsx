import "./App.css";
import { TerminalTemplate } from "./components/TerminalTemplate";

function App() {
  return (
    <div>
      <TerminalTemplate
        initialMessage={"hello world"}
        username={"nic@linux"}
        draggable={true}
      />
    </div>
  );
}

export default App;
