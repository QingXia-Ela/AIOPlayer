/// <reference types="vite/client" />

interface TAURIWindow extends (typeof window) {
  __TAURI_IPC__: any
}

declare global {
  interface Window {
    __TAURI_IPC__: any
  }
}