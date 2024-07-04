import { useState, useEffect } from "react";
import { commands } from "@/data/commands";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { MinimizedTerminal } from "../MinimizedTerminal";
import { MessageLines } from "../MessageLines.tsx/MessageLines";
import { useDragDrop, useWindowActions } from "@/hooks";
import { TerminalHeader } from "../TerminalHeader";

export interface Theme {
  backgroundColor?: string;
  header?: {
    textColor?: string;
    backgroundColor?: string;
  };
  body?: {
    textColor?: string;
    backgroundColor?: string;
  };
  prompt?: {
    textColor?: string;
  };
}

export interface TerminalTemplateProps {
  initialMessage: string;
  username: string;
  draggable: boolean;
  theme?: Theme; // Agregar el tema como una prop
}

export const TerminalTemplate: React.FC<TerminalTemplateProps> = ({
  initialMessage,
  username,
  draggable = false,
  theme = {
    backgroundColor: "#111",
    header: { textColor: "#FFF", backgroundColor: "#222" },
    body: { textColor: "#EEE", backgroundColor: "#111" },
    prompt: { textColor: "#0F0" },
  },
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
        backgroundColor: theme.backgroundColor,
        color: theme.body?.textColor,
      }}
    >
      <TerminalHeader
        username={username}
        draggable={draggable}
        handleMouseDown={handleMouseDown}
        style={{
          backgroundColor: theme.header?.backgroundColor,
          color: theme.header?.textColor,
        }}
      />
      <div
        className={styles.body}
        style={{
          backgroundColor: theme.body?.backgroundColor,
          color: theme.body?.textColor,
        }}
      >
        <MessageLines message={initialMessage} />
        <TerminalPrompt
          username={username}
          initialCommands={commands}
          style={{
            color: theme.prompt?.textColor,
          }}
        />
      </div>
    </div>
  );
};
