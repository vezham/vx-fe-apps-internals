type Faqs = {
  question: string
  answer: string
}

export interface Faq {
  id?: string
  title: string
  description: string
  data: Faqs[]
}
