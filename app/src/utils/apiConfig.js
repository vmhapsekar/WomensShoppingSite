import axios from 'axios'

export function getApiConfig (serviceName, headers) {
  const baseUrl = getBaseUrl(serviceName)
  const instance = axios.create()
  instance.defaults.headers = {
    'common': {
      'Content-Type': 'application/json',
      'APPLICATION-ID': 'Womens Shopping Site',
      'Application-Version': '0.1',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'SOURCE-IP': 'localhost'
    },
    'post': {
      'Content-Type': 'application/json'
    }
  }

  if (headers) {
    Object.assign(instance.defaults.headers.common, headers)
  }
  instance.defaults.baseURL = baseUrl
  return instance
}

export function getBaseUrl (serviceName) {
  switch (serviceName) {
    case 'productService':
      return '/data'
    default:
      return ''
  }
}
