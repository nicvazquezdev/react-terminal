import { useState, useCallback } from "react";
import { messages } from "../data/messages";

type Messages = typeof messages;
type MessageKey = keyof Messages;

type HistoryEntry = {
  prompt: string;
  response: string;
};

export function useTerminal() {
  const [prompt, setPrompt] = useState<string>("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const response =
        prompt in messages ? messages[prompt as MessageKey] : "Invalid prompt";

      setHistory((prevHistory) => [...prevHistory, { prompt, response }]);

      setPrompt("");
    },
    [prompt],
  );

  return {
    prompt,
    setPrompt,
    history,
    handleSubmit,
  };
}
