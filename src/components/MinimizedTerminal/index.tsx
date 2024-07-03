import TerminalIcon from "@/assets/terminal-icon.png";
import { useWindowActions } from "@/context/WindowActionsContext";
import styles from "./minimizedTerminal.module.css";

export const MinimizedTerminal: React.FC = () => {
  const { handleAction } = useWindowActions();
  return (
    <div>
      <img
        className={styles.img}
        onClick={() => handleAction("minimize")}
        src={TerminalIcon}
        alt="Terminal Icon"
      />
    </div>
  );
};
