export type CategorySlug =
  | 'news'
  | 'market'
  | 'analysis'
  | 'report'
  | 'outlook'
  | 'special-reports'
  | 'companies'
  | 'technology'
  | 'interviews'

export type TechTopicSlug =
  | 'production'
  | 'metallurgy'
  | 'automation'
  | 'equipment'
  | 'energy'
  | 'decarbonization'

export interface Category {
  slug: CategorySlug
  name: string
  nameEn: string
  description: string
  /** Child categories rendered together on this category's archive page. */
  includes?: CategorySlug[]
}

export interface Author {
  name: string
  role?: string
}

export interface Interviewee {
  name: string
  position: string
  company: string
  portrait: string
}

export interface ReportMeta {
  issue: string
  pages: number
  format: 'PDF' | 'Online'
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  category: CategorySlug
  publishedAt: string
  readingTime: number
  author: Author
  image?: string
  imageAlt?: string
  topic?: TechTopicSlug
  tags?: string[]
  body?: string[]
  interviewee?: Interviewee
  report?: ReportMeta
}

export interface NewsBrief {
  id: string
  title: string
  publishedAt: string
  href?: string
}

export interface MarketItem {
  id: string
  name: string
  nameEn: string
  value: number
  decimals: number
  unit: string
  basis: string
  change: number
  changePercent: number
  trend: number[]
}

export interface MarketMeta {
  updatedAt: string
  source: string
}

export interface Company {
  id: string
  slug: string
  name: string
  nameEn: string
  initials: string
  country: string
  city: string
  activity: string
  description: string
  founded: number
  capacity?: string
}

export interface TechTopic {
  slug: TechTopicSlug
  name: string
  description: string
}

export interface NavItem {
  label: string
  href: string
}
