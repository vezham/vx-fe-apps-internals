export enum StoreKeys {
  REDIRECTED_FROM = 'redirect-from'
}

export enum StateKeys {
  KEY = 'launcher',
  NO_ACTIVE_IAM_ACCOUNT = 'no_active_iam_account',
  NO_ACTIVE_IAM_BUSINESS = 'no_active_iam_business',
  INIT_IAM_ACCOUNT_BY_CODE = 'init_iam_account_by_code',
  INIT_IAM_BUSINESS_BY_CODE = 'init_iam_business_by_code'
}

export enum IFrameKeys {
  HOST = 'v-iframe-iam'
}

export enum IAMtoken {
  REFRESH_TOKEN = 'rt',
  ACCESS_TOKEN = 'at',
  EXPIRES_IN = 'ein'
}

export enum HQkeys {
  ACTIVE_PEOPLE = 'people_handle',
  ACTIVE_BUSINESS = 'business_handle',
  ACTIVE_WORKSPACE = 'workspace_handle'
}

export enum TokenKeys {
  ACCOUNT_REFRESH_TOKEN = 'account_rt',
  ACCOUNT_ACCESS_TOKEN = 'account_at',
  ACCOUNT_EXPIRES_IN = 'account_ein',
  ACCOUNT_DC = 'account_dc',
  BUSINESS_REFRESH_TOKEN = 'business_rt',
  BUSINESS_ACCESS_TOKEN = 'business_at',
  BUSINESS_EXPIRES_IN = 'business_ein'
}

export enum GrantType {
  AUTH_CODE = 'authorization_code',
  REFRESH_TOKEN = 'refresh_token'
}

export enum TokenType {
  NO_TOKEN,
  ACCOUNT,
  BUSINESS
}

export enum DomainType {
  DEFAULT,
  SANDBOX,
  DC
}

export type Status = {
  status: boolean
}

export type AuthToken = {
  authorization_type: string
  refresh_token?: string
  access_token: string
  expires_in: string
}

export type RQauthToken = {
  code: string
}

export type RQrefreshToken = {
  refresh_token: string
}

export const RQConfigBDC = {
  token_type: TokenType.BUSINESS,
  domain_type: DomainType.DC,
  workspace_id: true
}
