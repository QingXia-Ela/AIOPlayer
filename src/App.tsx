import { useState } from "react";
import { search } from '@/api/search'
import Styles from "./App.module.scss";
import { AxiosResponse } from "axios";
import useConfigManager from "./hooks/useConfigManager";
import Background from "@/components/Background";

function App() {
  const { getConfig, setConfig } = useConfigManager()

  return (
    <div className="container">
      <Background />
      <h1>Welcome to Tauri!</h1>
    </div>
  );
}

export default App;
