export type ActionType = "maximize" | "minimize" | "close" | "restore";

export interface Theme {
  backgroundColor?: string;
  header?: {
    textColor?: string;
    backgroundColor?: string;
    icons?: {
      fill?: string; // Nueva propiedad para el fill de los íconos
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
