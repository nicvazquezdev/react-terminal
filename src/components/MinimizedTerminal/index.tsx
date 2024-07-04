import TerminalIcon from "@/assets/terminal-icon.png";
import styles from "./minimizedTerminal.module.css";
import { useWindowActions } from "@/hooks";

export const MinimizedTerminal: React.FC = () => {
  const { handleAction } = useWindowActions();
  return (
    <div>
      <img
        className={styles.img}
        onClick={() => handleAction("restore")}
        src={TerminalIcon}
        alt="Terminal Icon"
      />
    </div>
  );
};
