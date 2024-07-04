import "./App.css";
import { TerminalTemplate } from "./components/TerminalTemplate";
import { WindowActionsProvider } from "./context/WindowActionsContext";

function App() {
  const customTheme = {
    backgroundColor: "#282c34",
    header: {
      textColor: "#61dafb",
      backgroundColor: "#20232a",
    },
    body: {
      textColor: "#ffffff",
      backgroundColor: "#282c34",
    },
    prompt: {
      textColor: "#61dafb",
    },
  };
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
          initialMessage="hello world"
          username="nic@linux"
          draggable={true}
          theme={customTheme}
        />
      </div>
    </WindowActionsProvider>
  );
}

export default App;
