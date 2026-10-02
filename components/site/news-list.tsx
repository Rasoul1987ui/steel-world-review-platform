import { cn } from '@/lib/utils'
import type { Article } from '@/lib/types'
import { NewsListItem } from './story-cards'

export function NewsList({ articles, className }: { articles: Article[]; className?: string }) {
  if (articles.length === 0) return null
  return (
    <ul className={cn('swr-news-list divide-y', className)}>
      {articles.map((article) => (
        <li key={article.id}>
          <NewsListItem article={article} />
        </li>
      ))}
    </ul>
  )
}
