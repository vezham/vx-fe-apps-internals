/// <reference types="vite/client" />

// console.table(import.meta.env);
export const __DEV__ = process.env.NODE_ENV !== 'production'
export const __TEST__ = process.env.NODE_ENV === 'test'
export const __PRODUCTION__ = process.env.NODE_ENV === 'production'
export const __PREVIEW__ = import.meta.env.V_IS_PREVIEW === 'true'
export const __DEBUG__ = import.meta.env.V_IS_DEBUG === 'true'
export const IS_BETA = import.meta.env.V_IS_BETA === 'true'
export const APP_NAME = import.meta.env.V_APP_NAME || 'vapp'

type T_BASE_API_URL = 'api' | 'mock' | 'local'
export const BASE_API_URL: T_BASE_API_URL =
  import.meta.env.V_BASE_API_URL || 'api'

export * from './country'
export * from './data_center'
export * from './dial_code'
export * from './language'
export * from './timezone'
