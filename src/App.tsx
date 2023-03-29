import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { search } from '@/api/search'
import Styles from "./App.module.scss";
import { AxiosResponse } from "axios";
import useConfigManager from "./hooks/useConfigManager";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const { getConfig, setConfig } = useConfigManager()

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    // await hide()
    // alert(JSON.stringify((await search({
    //   keyword: 'operation pyrite'
    // }) as AxiosResponse).data))
    console.log(await getConfig());
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
    </div>
  );
}

export default App;
