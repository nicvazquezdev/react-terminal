import { TerminalIcons } from "../TerminalIcons";
import styles from "./terminalHeader.module.css";

export interface TerminalHeaderProps {
  username: string;
  draggable: boolean;
  handleMouseDown: (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => void;
  style?: React.CSSProperties; // Añadir prop style
  iconFill?: string; // Nueva prop para el fill de los íconos
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  username,
  draggable,
  handleMouseDown,
  style, // Añadir prop style
  iconFill, // Añadir prop iconFill
}) => (
  <div
    className={styles.header}
    onMouseDown={draggable ? handleMouseDown : undefined}
    onTouchStart={draggable ? handleMouseDown : undefined}
    style={style} // Aplicar el estilo
  >
    <div className={styles.spacer}></div>
    <span>{username}~</span>
    <TerminalIcons iconFill={iconFill} /> {/* Pasar el fill de los íconos */}
  </div>
);
