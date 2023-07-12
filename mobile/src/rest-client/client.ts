import type { SendRequestOptions } from './types'

function buildHeaders(accessToken?: string, additionalHeaders?: HeadersInit_) {
  const headers: HeadersInit_ = {
    'Content-Type': 'application/json',
    'Authorization': accessToken ? `Bearer ${accessToken}` : undefined,
    ...additionalHeaders
  }

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  return headers
}

async function sendRequest(method: string, path: string, { body, accessToken, headers: additionalHeaders }: SendRequestOptions) {
  const headers = buildHeaders(accessToken, additionalHeaders)

  await fetch(path, {
    method,
    headers,
    body
  })
}
