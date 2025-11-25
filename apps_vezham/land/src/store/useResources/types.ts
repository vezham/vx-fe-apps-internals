export interface PromptSuggestion {
  id: string
  label: string
  icon: string
}

export interface TabItem {
  key: string
  label: string
  icon?: string
  href?: string
  subItems?: Array<{
    key: string
    label: string
    description: string
    href: string
  }>
}

export interface Resources {
  promptsuggest: PromptSuggestion[]
  tabs: TabItem[]
}

export type Personalize = {
  cards: cards
}

export type cards = {
  welcome_message: welcomeData
}

export type welcomeData = {
  __type: string
  icon?: React.ReactNode
  chip_label?: string
  super_title?: string
  subtitle?: string
  title?: string
  description?: string
  cover?: coverType
  actions: welcomeDataAction
}

export type welcomeDataAction = {
  submit: submit
  trial: trial
}

export type coverType = {
  __type: string
  type?: string
  alt_text?: string
  url: string
}

export type submit = {
  label?: string
  href?: string
}

export type trial = {
  placeholder?: string
  href?: string
}

export type CardProps = {
  title: string
  description: string
  button: string
  color: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  url: string
}

type RQResources = object
type RQPersonalize = object

export type { RQResources, RQPersonalize }
