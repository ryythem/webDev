import { useEffect, useRef, useState } from "react";

function App() {
  const [messages, setMessages] = useState(["hello", "hi there"]);
  const [message, setMessage] = useState("");
  //@ts-ignore
  const wsRef = useRef();
  useEffect(() => {
    const ws = new WebSocket("http://localhost:8000");

    ws.onmessage = (event) => {
      //@ts-ignore
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
    return () => {
      ws.close();
    };
  }, []);
  return (
    <div className="h-screen bg-black">
      <br />
      <br />
      <br />
      <div className="h-[95vh]">
        {messages.map((m) => (
          <div className="m-8">
            <span className="bg-white text-black rounded p-4 ">{m}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-white flex">
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="flex-1 p-4"
        />
        <button
          onClick={() => {
            //@ts-ignore
            wsRef.current.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: message,
                },
              })
            );
          }}
          className="bg-purple-600 text-white"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default App;
