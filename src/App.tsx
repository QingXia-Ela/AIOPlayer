import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { search } from '@/api/search'
import "./App.scss";
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

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>你好</p>

      <div className="row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
      </div>
      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
