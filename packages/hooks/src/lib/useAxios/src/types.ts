import { AxiosRequestConfig } from 'axios'

interface Props {
  onRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig | void
  onError?: (error: any) => void
}

export type { Props }
