import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
    <MantineProvider>
      <App />
    </MantineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
