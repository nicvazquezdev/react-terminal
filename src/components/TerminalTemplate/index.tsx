import { useState, useEffect } from "react";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";
import { MinimizedTerminal } from "../MinimizedTerminal";
import { MessageLines } from "../MessageLines.tsx/MessageLines";
import { useDragDrop, useWindowActions } from "@/hooks";
import { TerminalHeader } from "../TerminalHeader";
import { TerminalTemplateProps } from "@/types/types";
import { commands, defaultTheme } from "@/data";

/**
 * TerminalTemplate component provides a customizable terminal UI.
 *
 * @param {string} initialMessage - The initial message to display in the terminal.
 * @param {string} username - The username to display in the terminal prompt.
 * @param {boolean} draggable - Determines if the terminal window is draggable.
 * @param {boolean} minimizedByDefault - Determines if the terminal should be minimized by default.
 * @param {Theme} [theme] - Theme customization options for the terminal.
 *
 * @returns {JSX.Element} A customizable terminal component.
 */
export const TerminalTemplate: React.FC<TerminalTemplateProps> = ({
  initialMessage,
  username,
  draggable = false,
  minimizedByDefault = false,
  theme,
}) => {
  const mergedTheme = { ...defaultTheme, ...theme };

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
        backgroundColor:
          mergedTheme.backgroundColor ?? mergedTheme.body?.backgroundColor,
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
