type Commands = {
  info: string;
  help: string;
};

export const commands: Commands = {
  info: `
  Welcome to the React Terminal!
  This terminal is designed to help you interact with the system using predefined commands.
  You can type various commands to perform different actions.
  For a list of available commands, type 'help'.
  `,
  help: `
  Available Commands:\n
  - info: Provides information about this terminal.
  - help: Displays a list of available commands and their descriptions.
  
  Usage:
  Type a command and press Enter to execute it.
  `,
};
