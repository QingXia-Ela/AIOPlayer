/* eslint-disable no-undef */
import { exec } from 'child_process'
import server from 'monster-siren-api'


exec('vite', (e) => {
  if (e) {
    console.log(e);
    process.exit(1)
  }
  console.log(1);
}).stdout.on("data", (ch) => {
  console.log(ch);
})

server()

const devProcess = exec('react-devtools')

devProcess.stdout.on("data", (ch) => {
  console.log(ch);
})

process.on("exit", () => {
  devProcess.kill()
})
