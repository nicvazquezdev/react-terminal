export type ActionType = "maximize" | "minimize" | "close" | "restore";

export interface Theme {
  backgroundColor?: string;
  header?: {
    textColor?: string;
    backgroundColor?: string;
    icons?: {
      fill?: string;
    };
  };
  body?: {
    textColor?: string;
    backgroundColor?: string;
  };
  prompt?: {
    textColor?: string;
    history?: {
      textColor?: string;
    };
  };
}

export interface TerminalTemplateProps {
  /**
   * The initial message to display in the terminal.
   */
  initialMessage: string;

  /**
   * The username to display in the terminal prompt.
   */
  username: string;

  /**
   * Determines if the terminal window is draggable.
   */
  draggable: boolean;

  /**
   * Determines if the terminal should be minimized by default.
   */
  minimizedByDefault: boolean;

  /**
   * Theme customization options for the terminal.
   */
  theme?: Theme;
}
