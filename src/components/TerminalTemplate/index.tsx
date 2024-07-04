import { useState, useEffect } from "react";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { MinimizedTerminal } from "../MinimizedTerminal";
import { MessageLines } from "../MessageLines.tsx/MessageLines";
import { useDragDrop, useWindowActions } from "@/hooks";
import { TerminalHeader } from "../TerminalHeader";
import { Theme } from "@/types/types";
import { commands, defaultTheme } from "@/data";

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
  theme,
}) => {
  const mergedTheme = { ...defaultTheme, ...theme }; // Fusionar los temas

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
        backgroundColor: mergedTheme.backgroundColor,
        color: mergedTheme.body?.textColor,
      }}
    >
      <TerminalHeader
        username={username}
        draggable={draggable}
        handleMouseDown={handleMouseDown}
        style={{
          backgroundColor: mergedTheme.header?.backgroundColor,
          color: mergedTheme.header?.textColor,
        }}
        iconFill={mergedTheme.header?.icons?.fill}
      />
      <div
        className={styles.body}
        style={{
          backgroundColor: mergedTheme.body?.backgroundColor,
          color: mergedTheme.body?.textColor,
        }}
      >
        <MessageLines message={initialMessage} />
        <TerminalPrompt
          username={username}
          initialCommands={commands}
          style={{
            color: mergedTheme.prompt?.textColor,
          }}
          historyTextColor={mergedTheme.prompt?.history?.textColor}
        />
      </div>
    </div>
  );
};
