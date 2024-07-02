import { useTerminal, Commands } from "../../hooks/useTerminal";
import styles from "./terminalPrompt.module.css";
import React, { useCallback } from "react";

export interface TerminalPromptProps {
  userPrompt?: string;
  initialCommands: Commands;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  userPrompt = "user@user",
  initialCommands,
}) => {
  const { prompt, setPrompt, history, handleSubmit } =
    useTerminal(initialCommands);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrompt(e.target.value);
    },
    [setPrompt],
  );

  return (
    <div className={styles.container}>
      <History history={history} userPrompt={userPrompt} />
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          {userPrompt}
          {">"}
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
  userPrompt: string;
}

const History: React.FC<HistoryProps> = ({ history, userPrompt }) => {
  return (
    <div className={styles.history}>
      {history.map((entry, index) => (
        <div key={index} className={styles.historyEntry}>
          <span>
            {userPrompt}&gt; {entry.prompt}
          </span>
          <br />
          <span>{entry.response}</span>
        </div>
      ))}
    </div>
  );
};
