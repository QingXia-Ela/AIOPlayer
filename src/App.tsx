import { useRoutes, Router } from "react-router-dom";
import useConfigManager from "./hooks/useConfigManager";
import { ThemeProvider } from "@mui/material";
import Layout from "./layout";
import RouterList from "./router";
import { defaultTheme } from "./themes";

function App() {
  const { getConfig, setConfig } = useConfigManager()

  return (
    <Layout>
      <ThemeProvider theme={defaultTheme}>
        {useRoutes(RouterList)}
      </ThemeProvider>
    </Layout>
  );
}

export default App;
