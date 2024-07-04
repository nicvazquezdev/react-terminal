import { useTerminal, Commands } from "@/hooks/useTerminal";
import styles from "./terminalPrompt.module.css";
import React, { useEffect, useRef } from "react";
import { MessageLines } from "../MessageLines.tsx/MessageLines";

export interface TerminalPromptProps {
  username?: string;
  initialCommands: Commands;
  style: React.CSSProperties;
  promptLabelTextColor: string;
  inputTextColor: string;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  username = "user@user",
  initialCommands,
  style,
  promptLabelTextColor,
  inputTextColor,
}) => {
  const { prompt, setPrompt, history, handleSubmit } =
    useTerminal(initialCommands);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView();
  }, [history]);

  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus();
    };

    document.addEventListener("click", focusInput);

    return () => {
      document.removeEventListener("click", focusInput);
    };
  }, []);

  return (
    <div className={styles.container} style={style}>
      <History
        history={history}
        username={username}
        historyLabelTextColor={promptLabelTextColor}
      />
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          <span style={{ color: promptLabelTextColor }}>
            {username}
            {">"}
          </span>
          <input
            style={{ color: inputTextColor }}
            ref={inputRef}
            className={styles.input}
            onChange={handleInputChange}
            value={prompt}
            autoFocus
            type="text"
          />
          <span className={styles.cursor}></span>
        </label>
      </form>
    </div>
  );
};

interface HistoryProps {
  history: { prompt: string; response: string }[];
  username: string;
  historyLabelTextColor: string;
}

const History: React.FC<HistoryProps> = ({
  history,
  username,
  historyLabelTextColor,
}) => {
  return (
    <div className={styles.history}>
      {history.map((entry, index) => (
        <div key={index} className={styles.historyEntry}>
          <span className={styles.historyEntry__user}>
            <span style={{ color: historyLabelTextColor }}>{username}&gt;</span>{" "}
            {entry.prompt}
          </span>
          <br />
          <MessageLines message={entry.response} />
        </div>
      ))}
    </div>
  );
};
