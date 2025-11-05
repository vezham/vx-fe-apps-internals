import 'axios'

import { IAM } from '@vx/contracts'

declare module 'axios' {
  export interface AxiosRequestConfig {
    token_type?: IAM.TokenType
    domain_type?: IAM.DomainType
    workspace_id?: boolean
  }
}
