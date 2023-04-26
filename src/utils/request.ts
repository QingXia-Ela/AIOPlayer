import { Method } from 'axios'
import { fetch, getClient } from '@tauri-apps/api/http'
import type { RequestConfig } from 'monster-siren-api/dist/packages/declare/modules'
import request, { } from 'monster-siren-api/dist/packages/utils/request'
import { RequestUtil } from 'monster-siren-api/dist/packages/declare/modules'

// monster-siren server host
const BaseUrl = 'http://localhost:3000'

export async function tauriRequest(url: string, method: Method) {
  return (await fetch(url, {
    // @ts-expect-error: upper case prevent
    method: method.toUpperCase(),
  })).data
}

export async function normalRequest(url: string, method: Method) {
  const FinalUrl = BaseUrl + url.replaceAll('https://monster-siren.hypergryph.com/api', '')
  return (await request(FinalUrl, {
    method,
  })).data
}

export default async function <T = any>(method: Method, url: string, config: RequestConfig = {}): Promise<T> {
  const {
    params,
  } = config

  let queryStr = '?'
  if (params) {
    for (const i in params) {
      queryStr += `${i}=${params[i]}&`
    }
    url += queryStr.substring(0, queryStr.length - 1)
  }
  // @ts-expect-error: tauri api lost in browser
  return await (window.__TAURI_IPC__ ? tauriRequest(url, method) : normalRequest(url, method, config))
}
