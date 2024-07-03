import styles from "./terminalIcons.module.css";
import MaximizeIcon from "@/assets/icons/icon-maximize-terminal.svg";
import RestoreIcon from "@/assets/icons/icon-restore-terminal.svg";
import MinimizeIcon from "@/assets/icons/icon-minimize-terminal.svg";
import CloseIcon from "@/assets/icons/icon-close-terminal.svg";
import { useWindowActions } from "@/context/WindowActionsContext";

export const TerminalIcons: React.FC = () => {
  const { isMaximized, handleAction } = useWindowActions();

  const icons = [
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
          />
        </div>
      ))}
    </div>
  );
};
