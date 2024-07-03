import styles from "./terminalIcons.module.css";
import MaximizeIcon from "@/assets/icons/icon-maximize-terminal.svg";
import RestoreIcon from "@/assets/icons/icon-restore-terminal.svg";
import MinimizeIcon from "@/assets/icons/icon-minimize-terminal.svg";
import CloseIcon from "@/assets/icons/icon-close-terminal.svg";

export const TerminalIcons: React.FC<{
  onMaximize: () => void;
  isMaximized: boolean;
}> = ({ onMaximize, isMaximized }) => {
  const icons = [
    {
      src: MinimizeIcon,
      alt: "Minimize",
    },
    {
      src: isMaximized ? RestoreIcon : MaximizeIcon,
      alt: isMaximized ? "Restore" : "Maximize",
      action: "maximize",
    },
    {
      src: CloseIcon,
      alt: "Close",
      customClass: styles.icons__iconContainer_close,
    },
  ];

  const handleClick = (action: string | undefined) => {
    if (action === "maximize") {
      onMaximize();
    }
  };

  return (
    <div className={styles.icons}>
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`${styles.icons__iconContainer} ${icon.customClass || ""}`}
          onClick={() => handleClick(icon.action)}
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
