import { useTerminal } from "../../hooks";
import styles from "./terminalPrompt.module.css";
import React, { useCallback } from "react";

export const TerminalPrompt: React.FC = () => {
  const { prompt, setPrompt, history, handleSubmit } = useTerminal();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrompt(e.target.value);
    },
    [setPrompt],
  );

  return (
    <div className={styles.container}>
      <History history={history} />
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          user@user{">"}
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
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div className={styles.history}>
      {history.map((entry, index) => (
        <div key={index} className={styles.historyEntry}>
          <span>user@user&gt; {entry.prompt}</span>
          <br />
          <span>{entry.response}</span>
        </div>
      ))}
    </div>
  );
};
