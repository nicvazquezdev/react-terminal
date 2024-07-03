export interface MessageLinesProps {
  message: string;
}

export const MessageLines: React.FC<MessageLinesProps> = ({ message }) => {
  return (
    <>
      {message.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </>
  );
};
