import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SocketProvider } from  "./context/SocketProvider"
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
    <SocketProvider>
    <App />
    </SocketProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
