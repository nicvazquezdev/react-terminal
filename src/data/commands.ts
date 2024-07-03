type Commands = {
  info: string;
  help: string;
};

export const commands: Commands = {
  info: `
  Welcome to the React Terminal!\n
  This terminal is designed to help you interact with the system using predefined commands.\n
  You can type various commands to perform different actions.\n
  For a list of available commands, type 'help'.\n
  `,
  help: `
  Available Commands:\n
  - info: Provides information about this terminal.\n
  - help: Displays a list of available commands and their descriptions.\n
  Usage: Type a command and press Enter to execute it.
  `,
};
