import "./App.css";
import { TerminalTemplate } from "./components/TerminalTemplate";
import { WindowActionsProvider } from "./context/WindowActionsContext";

function App() {
  return (
    <WindowActionsProvider>
      <div
        style={{
          border: "1px solid crimson",
          width: "95vw",
          height: "95vh",
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        <TerminalTemplate
          initialMessage={"hello world"}
          username={"nic@linux"}
          draggable={true}
        />
      </div>
    </WindowActionsProvider>
  );
}

export default App;
