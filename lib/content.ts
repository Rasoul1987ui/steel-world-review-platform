import { articles, newsBriefs } from '@/lib/data/articles'
import { companies } from '@/lib/data/companies'
import { marketItems, marketMeta } from '@/lib/data/market'
import { categories, techTopics } from '@/lib/data/site'
import type { Article, CategorySlug, TechTopicSlug } from '@/lib/types'

/**
 * Data-access layer. Every page reads content through these functions so the
 * static data files can later be swapped for the WordPress REST API.
 */

const byNewest = (a: Article, b: Article) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()

export function getAllArticles() {
  return [...articles].sort(byNewest)
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => Boolean(article))
}

export function getArticlesByCategory(
  category: CategorySlug | CategorySlug[],
  options: { limit?: number; exclude?: string[] } = {},
) {
  const wanted = Array.isArray(category) ? category : [category]
  const result = getAllArticles().filter(
    (article) =>
      wanted.includes(article.category) && !options.exclude?.includes(article.slug),
  )
  return options.limit ? result.slice(0, options.limit) : result
}

export function getArticlesByTopic(topic: TechTopicSlug) {
  return getAllArticles().filter((article) => article.topic === topic)
}

export function getRelatedArticles(article: Article, limit = 4) {
  return getAllArticles()
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, limit)
}

export function searchArticles(query: string) {
  const q = query.trim()
  if (!q) return []
  return getAllArticles().filter(
    (article) => article.title.includes(q) || article.excerpt.includes(q),
  )
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getAllCategories() {
  return categories
}

export function getTechTopics() {
  return techTopics
}

export function getTechTopic(slug: TechTopicSlug) {
  return techTopics.find((topic) => topic.slug === slug)
}

export function getNewsBriefs(limit?: number) {
  return limit ? newsBriefs.slice(0, limit) : newsBriefs
}

export function getMarketItems() {
  return marketItems
}

export function getMarketMeta() {
  return marketMeta
}

export function getCompanies(limit?: number) {
  return limit ? companies.slice(0, limit) : companies
}

export function getCompanyBySlug(slug: string) {
  return companies.find((company) => company.slug === slug)
}

export function getArticleHref(article: Pick<Article, 'slug'>) {
  return `/articles/${article.slug}`
}

export function getCategoryHref(slug: CategorySlug) {
  if (slug === 'companies') return '/companies'
  return `/category/${slug}`
}
