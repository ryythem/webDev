import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log("Connection established");
      setSocket(newSocket);
      newSocket.send("hello server");
    };

    newSocket.onmessage = (message) => {
      console.log("Message received : ", message.data);
    };

    return () => newSocket.close();
  }, []);
  if (!socket) {
    return <div>Loading....</div>;
  }
  return <>Hi there</>;
}

export default App;
