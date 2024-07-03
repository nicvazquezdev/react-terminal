import { useWindowActions } from "@/context/WindowActionsContext";
import { commands } from "@/data/commands";
import { TerminalIcons } from "../TerminalIcons";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { useDragDrop } from "@/hooks/useDragDrop";
import { MinimizedTerminal } from "../MinimizedTerminal";

export interface TerminalTemplateProps {
  initialMessage: string;
  username: string;
  draggable?: boolean;
}

export const TerminalTemplate: React.FC<TerminalTemplateProps> = ({
  initialMessage,
  username,
  draggable = false,
}) => {
  const { containerRef, handleMouseDown } = useDragDrop(draggable);
  const { isMinimized, isMaximized, isClosed } = useWindowActions();

  if (isClosed) return null;

  if (isMinimized) return <MinimizedTerminal />;

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isMaximized && styles.containerMaximized} ${draggable && styles.containerDraggable}`}
    >
      <div
        className={styles.header}
        onMouseDown={draggable ? handleMouseDown : undefined}
        onTouchStart={draggable ? handleMouseDown : undefined}
      >
        <div className={styles.spacer}></div>
        <span>{username}~</span>
        <TerminalIcons />
      </div>
      <div className={styles.body}>
        {initialMessage.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <TerminalPrompt username={username} initialCommands={commands} />
      </div>
    </div>
  );
};
