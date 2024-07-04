import { useTerminal, Commands } from "@/hooks/useTerminal";
import styles from "./terminalPrompt.module.css";
import React, { useEffect, useRef } from "react";
import { MessageLines } from "../MessageLines.tsx/MessageLines";

export interface TerminalPromptProps {
  username?: string;
  initialCommands: Commands;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  username = "user@user",
  initialCommands,
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
    <div className={styles.container}>
      <History history={history} username={username} />
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          {username}
          {">"}
          <input
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
}

const History: React.FC<HistoryProps> = ({ history, username }) => {
  return (
    <div className={styles.history}>
      {history.map((entry, index) => (
        <div key={index} className={styles.historyEntry}>
          <span className={styles.historyEntry__user}>
            {username}&gt; {entry.prompt}
          </span>
          <br />
          <MessageLines message={entry.response} />
        </div>
      ))}
    </div>
  );
};
