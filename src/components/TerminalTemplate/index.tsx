import { useWindowActions } from "@/hooks/useWindowActions";
import { commands } from "@/data/commands";
import { TerminalIcons } from "../TerminalIcons";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { useDragDrop } from "@/hooks/useDragDrop";

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
  const { isMaximized, isVisible, handleAction } = useWindowActions();

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isMaximized ? styles.containerMaximized : ""} ${draggable ? styles.containerDraggable : ""}`}
    >
      <div
        className={styles.header}
        onMouseDown={draggable ? handleMouseDown : undefined}
        onTouchStart={draggable ? handleMouseDown : undefined}
      >
        <div className={styles.spacer}></div>
        <span>{username}~</span>
        <TerminalIcons handleAction={handleAction} isMaximized={isMaximized} />
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
