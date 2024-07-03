import React, { createContext, useContext, useState, ReactNode } from "react";

interface WindowActionsContextProps {
  isMinimized: boolean;
  isMaximized: boolean;
  isVisible: boolean;
  toggleMaximize: () => void;
  toggleMinimize: () => void;
  closeWindow: () => void;
  handleAction: (action: string | undefined) => void;
}

const WindowActionsContext = createContext<
  WindowActionsContextProps | undefined
>(undefined);

export const WindowActionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const closeWindow = () => {
    setIsVisible(false);
  };

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  const handleAction = (action: string | undefined) => {
    if (action === "maximize") {
      toggleMaximize();
    } else if (action === "minimize") {
      toggleMinimize();
    } else if (action === "close") {
      closeWindow();
    }
  };

  return (
    <WindowActionsContext.Provider
      value={{
        isMinimized,
        isMaximized,
        isVisible,
        toggleMaximize,
        toggleMinimize,
        closeWindow,
        handleAction,
      }}
    >
      {children}
    </WindowActionsContext.Provider>
  );
};

export const useWindowActions = () => {
  const context = useContext(WindowActionsContext);
  if (context === undefined) {
    throw new Error(
      "useWindowActions must be used within a WindowActionsProvider",
    );
  }
  return context;
};
