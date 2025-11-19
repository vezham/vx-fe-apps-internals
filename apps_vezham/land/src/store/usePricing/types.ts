export type cards = {
  welcome_message: welcomeData
}

export type welcomeData = {
  __type: string
  icon?: React.ReactNode
  chip_label?: string
  super_title?: string
  title?: string
  subtitle?: string
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
  label: string
}

export type trial = {
  placeholder: string
}

export type Personalize = {
  cards: cards
}

type RQPersonalize = object

export type { RQPersonalize }
