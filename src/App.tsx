import { useRoutes, Router } from "react-router-dom";
import useConfigManager from "./hooks/useConfigManager";
import Layout from "./layout";
import RouterList from "./router";

function App() {
  const { getConfig, setConfig } = useConfigManager()

  return (
    <Layout>
      {useRoutes(RouterList)}
    </Layout>
  );
}

export default App;
