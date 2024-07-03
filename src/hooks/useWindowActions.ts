import { useState } from "react";

export const useWindowActions = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const closeTerminal = () => {
    setIsVisible(false);
  };

  const handleAction = (action: string | undefined) => {
    if (action === "maximize") {
      toggleMaximize();
    } else if (action === "close") {
      closeTerminal();
    }
  };

  return {
    isMaximized,
    isVisible,
    toggleMaximize,
    closeTerminal,
    handleAction,
  };
};
