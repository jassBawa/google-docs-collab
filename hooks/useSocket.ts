// useSocket.ts
import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

export default function useSocket(url?: string): [Socket, () => void] {
  // Create a state variable for the socket and a setter function
  const [socket, setSocket] = useState<Socket>();

  // Create and set the socket when the component mounts, and disconnect it when the component unmounts
  useEffect(() => {
    // Use the url parameter or a default value
    const socketUrl = url || "http://localhost:3001";
    // Create the socket using the io function
    const s = io(socketUrl);
    // Set the socket state
    setSocket(s);

    // Return a function to disconnect the socket
    return () => {
      s.disconnect();
    };
  }, [url]); // Only run the effect if the url parameter changes

  // Return the socket and the disconnect function
  return [socket, () => socket?.disconnect()];
}
