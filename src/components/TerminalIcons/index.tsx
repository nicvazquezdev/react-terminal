import styles from "./terminalIcons.module.css";
import MaximizeIcon from "@/assets/icons/icon-maximize-terminal.svg";
import RestoreIcon from "@/assets/icons/icon-restore-terminal.svg";
import MinimizeIcon from "@/assets/icons/icon-minimize-terminal.svg";
import CloseIcon from "@/assets/icons/icon-close-terminal.svg";
import { ActionType } from "@/types/types";
import { useWindowActions } from "@/hooks";

interface TerminalIconsProps {
  iconFill?: string;
}

export const TerminalIcons: React.FC<TerminalIconsProps> = ({ iconFill }) => {
  const { isMaximized, handleAction } = useWindowActions();

  interface Icon {
    src: string;
    alt: string;
    action: ActionType;
    customClass?: string;
  }

  const icons: Icon[] = [
    {
      src: MinimizeIcon,
      alt: "Minimize",
      action: "minimize",
    },
    {
      src: isMaximized ? RestoreIcon : MaximizeIcon,
      alt: isMaximized ? "Restore" : "Maximize",
      action: "maximize",
    },
    {
      src: CloseIcon,
      alt: "Close",
      action: "close",
      customClass: styles.icons__iconContainer_close,
    },
  ];

  return (
    <div className={styles.icons}>
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`${styles.icons__iconContainer} ${icon.customClass || ""}`}
          onClick={() => handleAction(icon.action)}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className={styles.icons__iconContainer__icon}
            style={{ fill: iconFill }}
          />
        </div>
      ))}
    </div>
  );
};
