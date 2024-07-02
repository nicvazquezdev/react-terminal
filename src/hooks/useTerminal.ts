import { useState } from "react";

type CommandResponse = string;

export type Commands = {
  [key: string]: CommandResponse;
};

export function useTerminal(initialCommands: Commands) {
  const [prompt, setPrompt] = useState<string>("");
  const [history, setHistory] = useState<
    { prompt: string; response: string }[]
  >([]);
  const [commands, setCommands] = useState<Commands>(initialCommands);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let response: string;
    if (prompt in commands) {
      response = commands[prompt];
    } else {
      response =
        "Command not recognized. Type 'help' for a list of available commands.";
    }
    setHistory((prevHistory) => [...prevHistory, { prompt, response }]);
    setPrompt("");
  };

  return {
    prompt,
    setPrompt,
    history,
    handleSubmit,
    commands,
    setCommands,
  };
}
