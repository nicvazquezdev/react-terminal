import "./App.css";
import { TerminalTemplate } from "./components/TerminalTemplate";
import { WindowActionsProvider } from "./context/WindowActionsContext";

function App() {
  const customTheme = {
    backgroundColor: "#310823",
    header: {
      textColor: "white",
      backgroundColor: "#20232a",
      icons: {
        fill: "lightgray",
      },
    },
    body: {
      textColor: "#fafafa",
      backgroundColor: "",
    },
    prompt: {
      textColor: "#fafafa",
      label: {
        textColor: "var(--green)",
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
          initialMessage={`
To run a command as administrator (user "root"), use "sudo <command>".\n
See "man sudo_root" for details.
`}
          username="nicvazquez@react-terminal"
          draggable={true}
          theme={customTheme}
          minimizedByDefault={false}
        />
      </div>
    </WindowActionsProvider>
  );
}

export default App;
