import useConfigManager from "./hooks/useConfigManager";
import Layout from "./layout";

function App() {
  const { getConfig, setConfig } = useConfigManager()

  return (
    <Layout>
      test
    </Layout>
  );
}

export default App;
