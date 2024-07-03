import React, { createContext, useContext, useState, ReactNode } from "react";

type ActionType = "maximize" | "minimize" | "close";

interface WindowActionsContextProps {
  isMinimized: boolean;
  isMaximized: boolean;
  isClosed: boolean;
  handleAction: (action: ActionType) => void;
}

const WindowActionsContext = createContext<
  WindowActionsContextProps | undefined
>(undefined);

export const WindowActionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [windowState, setWindowState] = useState({
    isMaximized: false,
    isClosed: false,
    isMinimized: false,
  });

  const handleAction = (action: ActionType) => {
    setWindowState((prevState) => {
      switch (action) {
        case "maximize":
          return { ...prevState, isMaximized: !prevState.isMaximized };
        case "minimize":
          return { ...prevState, isMinimized: !prevState.isMinimized };
        case "close":
          return { ...prevState, isClosed: true };
        default:
          return prevState;
      }
    });
  };

  return (
    <WindowActionsContext.Provider
      value={{
        isMinimized: windowState.isMinimized,
        isMaximized: windowState.isMaximized,
        isClosed: windowState.isClosed,
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
