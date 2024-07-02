import { commands } from "../../data/commands";
import { TerminalPrompt } from "../TerminalPrompt/TerminalPrompt";
import styles from "./linuxTerminal.module.css";

const INITIAL_MESSAGE = `
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.
`;

export interface LinuxTerminalProps {
  initialMessage?: string;
}

export const LinuxTerminal: React.FC<LinuxTerminalProps> = ({
  initialMessage = INITIAL_MESSAGE,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>user@linux-desktop~</span>
      </div>
      <div className={styles.body}>
        {initialMessage.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <TerminalPrompt initialCommands={commands} />
      </div>
    </div>
  );
};
