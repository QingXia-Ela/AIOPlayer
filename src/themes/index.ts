import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fdfdfd',
    },
    secondary: {
      main: '#0070ff',
    },
    error: {
      main: '#f5222d',
    },
    warning: {
      main: '#faad14',
    },
    info: {
      main: '#0288d1',
    },
  },
})