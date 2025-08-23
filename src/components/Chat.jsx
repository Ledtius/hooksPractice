import { useEffect, useState } from "react";

const Chat = () => {
  const [chatMsg, setChatMsg] = useState([]);
  useEffect(() => {
    const handlerMessage = () => {
      const messages = [
        "Hello there!",
        "Have a great day!",
        "You're doing great!",
        "Keep up the good work!",
        "Wishing you all the best!",
      ];

      setChatMsg((prev) => {
        return [...prev, messages[Math.floor(Math.random() * messages.length)]];
      });
    };
    const interval = setInterval(handlerMessage, 2000);

    return () => {
      console.log("aaa");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(chatMsg);
  }, [chatMsg]);

  return (
    <>
      <h1>Random Chat Msgs:</h1>
      {chatMsg.map((msg) => {
        return <span key={crypto.randomUUID()}>{msg}</span>;
      })}
    </>
  );
};
export default Chat;
