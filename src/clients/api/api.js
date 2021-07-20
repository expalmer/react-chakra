import axios from 'axios'

export class Api {
  constructor({ baseURL = '/', timeout = 3000, responseType = 'json' } = {}) {
    this.instance = axios.create({
      baseURL,
      timeout,
      responseType,
    })

    this.instance.interceptors.request.use(
      config => {
        console.log('config', config)
        // return { ...config, headers: { Authorization: `Bearer token` } }
        return { ...config }
      },
      error => Promise.reject(error)
    )
  }

  get(url, ...params) {
    return this.instance.get(url, ...params)
  }

  post(url, body, ...params) {
    return this.instance.post(url, body, ...params)
  }

  put(url, body, ...params) {
    return this.instance.put(url, body, ...params)
  }

  delete(url, ...params) {
    return this.instance.delete(url, ...params)
  }
}
