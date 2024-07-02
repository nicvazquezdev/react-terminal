import styles from "./terminalIcons.module.css";
import MaximizeIcon from "../../assets/icons/icon-maximize-terminal.svg";
import MinimizeIcon from "../../assets/icons/icon-minimize-terminal.svg";
import CloseIcon from "../../assets/icons/icon-close-terminal.svg";

export const TerminalIcons = () => {
  return (
    <div className={styles.icons}>
      <img src={MinimizeIcon} alt="Minimize" className={styles.icon} />
      <img src={MaximizeIcon} alt="Maximize" className={styles.icon} />
      <img src={CloseIcon} alt="Close" className={styles.icon} />
    </div>
  );
};
