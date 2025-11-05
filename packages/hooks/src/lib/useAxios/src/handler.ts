import axios, { InternalAxiosRequestConfig } from 'axios'

import { BASE_API_URL, IAM } from '@vx/contracts'

import { useLogger } from '../../useLogger/src'

const NAMESPACE = 'useAxios'

const handleRequest = async (
  onRequest: (config: InternalAxiosRequestConfig) => void,
  config: InternalAxiosRequestConfig
) => {
  if (BASE_API_URL === 'local') {
    config.baseURL = import.meta.env.V_MOCK_LOCAL_API_URL
  } else if (BASE_API_URL === 'mock') {
    config.baseURL = import.meta.env.V_MOCK_API_URL
  } else if (config.domain_type === IAM.DomainType.SANDBOX) {
    config.baseURL = import.meta.env.V_APP_SANDBOX_API_URL
  } else if (config.domain_type === IAM.DomainType.DC) {
    config.baseURL = import.meta.env.V_APP_DC_API_URL
  } else {
    // if (BASE_API_URL == "api" || config.domain_type === IAM.DomainType.DEFAULT)
    config.baseURL = import.meta.env.V_APP_API_URL
  }
  useLogger.debug(NAMESPACE, `baseURL::${config.baseURL}`)

  onRequest(config)

  // if (config.token_type !== IAM.TokenType.NO_TOKEN) {}
  return config
}

const handleError = async (onError: (error: any) => void, error: any) => {
  onError(error)

  // Reject promise if usual error
  if (error.response?.status === 500) {
    // VBanner({ title: 'Something went wrong!', type: VType.error })
    // window.location.href = location.href = AppRoutes.NotFound
  } else if (error.response?.status <= 401) {
    //wjdlz/TODO: || error.response.status === 404) {
    useLogger.info(NAMESPACE, error.response.data.meta)
    return Promise.reject(error.response.data.meta)
  } else if (error.response?.status === 404) {
    // VBanner({ title: 'Resource got deleted !...', type: VType.error })
    useLogger.info(NAMESPACE, error.response.data.meta)
    return Promise.reject(error.response.data.meta)
  }

  /*
   * When response code is 401, try to refresh the token.
   * Eject the interceptor so it doesn't loop in case
   * token refresh causes the 401 response
   */
  let parsed_res
  try {
    let token_type = ''
    if (error.request?.config && error.request.config.token_type) {
      token_type = error.request.config.token_type
    } else if (error.response?.config && error.response.config.token_type) {
      token_type = error.response.config.token_type
    }
    parsed_res = axios(error.response.config)
  } catch (error: any) {
    if (error?.data?.meta) {
      parsed_res = Promise.reject(error.data.meta)
    } else if (error.data) {
      parsed_res = Promise.reject(error.data)
    } else {
      parsed_res = Promise.reject(error)
    }
  }
  return parsed_res
}

export { handleError, handleRequest }
