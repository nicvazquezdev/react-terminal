import { commands } from "@/data/commands";
import { TerminalIcons } from "../TerminalIcons";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./terminalTemplate.module.css";

export interface TerminalTemplateProps {
  initialMessage: string;
  username: string;
}

export const TerminalTemplate: React.FC<TerminalTemplateProps> = ({
  initialMessage,
  username,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div></div>
        <span>{username}~</span>
        <TerminalIcons />
      </div>
      <div className={styles.body}>
        {initialMessage.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <TerminalPrompt username={username} initialCommands={commands} />
      </div>
    </div>
  );
};
