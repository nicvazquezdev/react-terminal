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
  };
}
