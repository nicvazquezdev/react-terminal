import TerminalIcon from "@/assets/terminal-icon.png";
import { useWindowActions } from "@/context/WindowActionsContext";

export const MinimizedTerminal: React.FC = () => {
  const { handleAction } = useWindowActions();
  return (
    <div>
      <img
        onClick={() => handleAction("minimize")}
        src={TerminalIcon}
        alt="Terminal Icon"
      />
    </div>
  );
};
