import "./App.css";
import { TerminalTemplate } from "./components/TerminalTemplate";
import { WindowActionsProvider } from "./context/WindowActionsContext";

function App() {
  const customTheme = {
    backgroundColor: "red",
    header: {
      textColor: "#61dafb",
      backgroundColor: "#20232a",
      icons: {
        fill: "lightgray",
      },
    },
    body: {
      textColor: "#ffffff",
      backgroundColor: "red",
    },
    prompt: {
      textColor: "",
      history: {
        textColor: "#ff79c6",
      },
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
          minimizedByDefault={false}
        />
      </div>
    </WindowActionsProvider>
  );
}

export default App;
