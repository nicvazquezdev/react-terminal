import { WindowActionsContext } from "@/context/WindowActionsContext";
import { useContext } from "react";

export const useWindowActions = () => {
  const context = useContext(WindowActionsContext);
  if (context === undefined) {
    throw new Error(
      "useWindowActions must be used within a WindowActionsProvider",
    );
  }
  return context;
};
