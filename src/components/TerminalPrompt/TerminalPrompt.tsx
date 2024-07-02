import { useTerminal } from "../../hooks";
import styles from "./terminalPrompt.module.css";
import React, { useCallback } from "react";

export interface TerminalPromptProps {
  userLabel?: string;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  userLabel = "user@user",
}) => {
  const { prompt, setPrompt, history, handleSubmit } = useTerminal();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrompt(e.target.value);
    },
    [setPrompt],
  );

  return (
    <div className={styles.container}>
      <History history={history} userLabel={userLabel} />
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          {`${userLabel}>`}
          <input
            className={styles.input}
            onChange={handleInputChange}
            value={prompt}
            autoFocus
            type="text"
          />
        </label>
      </form>
    </div>
  );
};

interface HistoryProps {
  history: { prompt: string; response: string }[];
  userLabel: string;
}

const History: React.FC<HistoryProps> = ({ history, userLabel }) => {
  return (
    <div className={styles.history}>
      {history.map((entry, index) => (
        <div key={index} className={styles.historyEntry}>
          <span>
            {userLabel}&gt; {entry.prompt}
          </span>
          <br />
          <span>{entry.response}</span>
        </div>
      ))}
    </div>
  );
};
