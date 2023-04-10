import getPlatform from "./getPlatform"
import { createDir, Dir, exists, readTextFile, writeTextFile } from '@tauri-apps/api/fs'
import { PlayerConfig } from "@/types/config"

const _TAURI_CONFIG_NAME_ = 'settings.json', _TAURI_CONFIG_OPTIONS_ = { dir: Dir.AppData }

async function _browserGetConfig(): Promise<PlayerConfig> {
  return JSON.parse(localStorage.getItem('config') ?? '{}')
}
async function _browserSetConfig(o: PlayerConfig) {
  localStorage.setItem('config', JSON.stringify(o))
}

async function _tauriGetConfig(): Promise<PlayerConfig> {
  if (!await exists(_TAURI_CONFIG_NAME_, _TAURI_CONFIG_OPTIONS_)) await writeTextFile(_TAURI_CONFIG_NAME_, '{}', _TAURI_CONFIG_OPTIONS_)
  return JSON.parse(await readTextFile(_TAURI_CONFIG_NAME_, _TAURI_CONFIG_OPTIONS_))
}
async function _tauriSetConfig(o: PlayerConfig) {
  await writeTextFile(_TAURI_CONFIG_NAME_, JSON.stringify(o), _TAURI_CONFIG_OPTIONS_)
}

type FuncReturnType = { getConfig: typeof _browserGetConfig, setConfig: typeof _browserSetConfig }

export default function (): FuncReturnType {
  const pf = getPlatform(),
    res: Partial<FuncReturnType> = {}
  switch (pf) {
    case 'tauri':
      res.getConfig = _tauriGetConfig
      res.setConfig = _tauriSetConfig
      break;

    default:
      res.getConfig = _browserGetConfig
      res.setConfig = _browserSetConfig
      break;
  }
  return res as FuncReturnType
}
