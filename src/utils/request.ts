import { Method } from 'axios'
import { fetch } from '@tauri-apps/api/http'
import type { RequestConfig } from 'monster-siren-api/dist/packages/declare/modules'

export default async function (method: Method, url: string, config: RequestConfig = {}) {
  const {
    params,
    body
  } = config
  console.log(config);

  let queryStr = '/?'
  if (params) {
    for (const i in params) {
      queryStr += `${i}=${params[i]}&`
    }
    url += queryStr.substring(0, queryStr.length - 1)
  }

  return await fetch(url, {
    // @ts-expect-error: upper case prevent
    method: method.toUpperCase()
  })
}
