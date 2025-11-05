import axios from 'axios'

import { useLogger } from '../../useLogger/src'
import { handleError, handleRequest } from './handler'
import { Props } from './types'

const NAMESPACE = 'useAxios'

const init = ({ onRequest, onError }: Props) => {
  axios.interceptors.request.use(config => handleRequest(onRequest, config))
  axios.interceptors.response.use(
    response => response.data.data,
    error => handleError(onError, error)
  )

  // axios.defaults.baseURL = import.meta.env.V_APP_API_URL // wjdlz/NOTE: covered in handler
  axios.defaults.headers.common['content-type'] = 'application/json'
}

const useAxios = {
  get: async (url: string, config: any): Promise<any> => {
    useLogger.debug(NAMESPACE, `[get] url | ${url}`)
    return axios.get(url, config)
  },
  post: async (url: string, payload: any, config: any): Promise<any> => {
    useLogger.debug(NAMESPACE, `[post] url | ${url} | payload | ${payload}`)
    return axios.post(url, payload, config)
  },
  put: async (url: string, payload: any, config: any): Promise<any> => {
    useLogger.debug(NAMESPACE, `[put] url | ${url} | payload | ${payload}`)
    return axios.put(url, payload, config)
  },
  delete: async (url: string, config: any): Promise<any> => {
    useLogger.debug(NAMESPACE, `[delete] url | ${url}`)
    return axios.delete(url, config)
  }
}

export { init as initAxios, useAxios }
