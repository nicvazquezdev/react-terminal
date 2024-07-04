import { useState, useEffect } from "react";
import { commands } from "@/data/commands";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { MinimizedTerminal } from "../MinimizedTerminal";
import { MessageLines } from "../MessageLines.tsx/MessageLines";
import { useDragDrop, useWindowActions } from "@/hooks";
import { TerminalHeader } from "../TerminalHeader";

export interface TerminalTemplateProps {
  initialMessage: string;
  username: string;
  draggable: boolean;
  backgroundColor?: string;
}

export const TerminalTemplate: React.FC<TerminalTemplateProps> = ({
  initialMessage,
  username,
  draggable = false,
  backgroundColor = "#111",
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
      className={`${styles.container} ${
        isMaximized && styles.containerMaximized
      } ${draggable && styles.containerDraggable}`}
      style={{
        left: position.x,
        top: position.y,
        backgroundColor,
      }}
    >
      <TerminalHeader
        username={username}
        draggable={draggable}
        handleMouseDown={handleMouseDown}
      />
      <div className={styles.body}>
        <MessageLines message={initialMessage} />
        <TerminalPrompt username={username} initialCommands={commands} />
      </div>
    </div>
  );
};
