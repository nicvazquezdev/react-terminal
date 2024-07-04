import { useState, useEffect } from "react";
import { commands } from "@/data/commands";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { MinimizedTerminal } from "../MinimizedTerminal";
import { MessageLines } from "../MessageLines.tsx/MessageLines";
import { useDragDrop, useWindowActions } from "@/hooks";
import { TerminalHeader } from "../TerminalHeader";
import { Theme } from "@/types/types";

export interface TerminalTemplateProps {
  initialMessage: string;
  username: string;
  draggable: boolean;
  minimizedByDefault: boolean;
  theme?: Theme;
}

export const TerminalTemplate: React.FC<TerminalTemplateProps> = ({
  initialMessage,
  username,
  draggable = false,
  minimizedByDefault = false,
  theme = {
    backgroundColor: "#111",
    header: {
      textColor: "#FFF",
      backgroundColor: "#222",
      icons: { fill: "#FFF" },
    },
    body: { textColor: "#EEE", backgroundColor: "#111" },
    prompt: {
      textColor: "#0F0",
      history: {
        textColor: "#FFF",
      },
    },
  },
}) => {
  const { containerRef, handleMouseDown, position, setPosition } =
    useDragDrop(draggable);
  const { isMinimized, isMaximized, isClosed, handleAction } =
    useWindowActions();
  const [prevPosition, setPrevPosition] = useState(position);

  useEffect(() => {
    if (minimizedByDefault) {
      handleAction("minimize");
    }
  }, []);

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
        iconFill={theme.header?.icons?.fill}
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
          historyTextColor={theme.prompt?.history?.textColor}
        />
      </div>
    </div>
  );
};
