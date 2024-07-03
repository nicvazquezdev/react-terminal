import { useState, useEffect } from "react";
import { useWindowActions } from "@/context/WindowActionsContext";
import { commands } from "@/data/commands";
import { TerminalIcons } from "../TerminalIcons";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { useDragDrop } from "@/hooks/useDragDrop";
import { MinimizedTerminal } from "../MinimizedTerminal";
import { MessageLines } from "../MessageLines.tsx/MessageLines";

export interface TerminalTemplateProps {
  initialMessage: string;
  username: string;
  draggable: boolean;
}

export const TerminalTemplate: React.FC<TerminalTemplateProps> = ({
  initialMessage,
  username,
  draggable = false,
}) => {
  const { containerRef, handleMouseDown, position, setPosition } =
    useDragDrop(draggable);
  const { isMinimized, isMaximized, isClosed } = useWindowActions();
  const [prevPosition, setPrevPosition] = useState(position);

  useEffect(() => {
    if (!isMinimized) {
      setPosition(prevPosition);
    }
  }, [isMinimized, prevPosition, setPosition]);

  useEffect(() => {
    if (!isMinimized) {
      setPrevPosition(position);
    }
  }, [isMinimized, position]);

  if (isClosed) return null;

  if (isMinimized) return <MinimizedTerminal />;

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isMaximized && styles.containerMaximized} ${draggable && styles.containerDraggable}`}
      style={{ left: position.x, top: position.y }}
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
        <MessageLines message={initialMessage} />
        <TerminalPrompt username={username} initialCommands={commands} />
      </div>
    </div>
  );
};
