import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepPurple, teal } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  typography: {
    fontSize: 16,
  },
  components: {

  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
