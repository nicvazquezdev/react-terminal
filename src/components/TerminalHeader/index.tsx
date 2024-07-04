import { TerminalIcons } from "../TerminalIcons";
import styles from "./terminalHeader.module.css";

export interface TerminalHeaderProps {
  username: string;
  draggable: boolean;
  handleMouseDown: (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => void;
  style?: React.CSSProperties;
  iconFill?: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  username,
  draggable,
  handleMouseDown,
  style,
  iconFill,
}) => (
  <div
    className={styles.header}
    onMouseDown={draggable ? handleMouseDown : undefined}
    onTouchStart={draggable ? handleMouseDown : undefined}
    style={style}
  >
    <div className={styles.spacer}></div>
    <span>{username}~</span>
    <TerminalIcons iconFill={iconFill} />
  </div>
);
