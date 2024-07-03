import { useState } from "react";
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
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const closeTerminal = () => {
    setIsVisible(false);
  };

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
        onMouseDown={draggable && !isMaximized ? handleMouseDown : undefined}
        onTouchStart={draggable && !isMaximized ? handleMouseDown : undefined}
      >
        <div className={styles.spacer}></div>
        <span>{username}~</span>
        <TerminalIcons
          onMaximize={toggleMaximize}
          isMaximized={isMaximized}
          onClose={closeTerminal}
        />
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
