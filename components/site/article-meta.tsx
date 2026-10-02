import Link from 'next/link'
import { getCategory, getCategoryHref } from '@/lib/content'
import { formatDate, formatReadingTime } from '@/lib/format'
import { cn } from '@/lib/utils'
import type { Article, CategorySlug } from '@/lib/types'

export function CategoryLabel({
  category,
  linked = true,
  className,
}: {
  category: CategorySlug
  linked?: boolean
  className?: string
}) {
  const name = getCategory(category)?.name ?? ''
  const classes = cn(
    'swr-category-label inline-flex items-center gap-2 text-[13px] font-bold text-primary',
    className,
  )
  const content = (
    <>
      <span aria-hidden="true" className="h-2.5 w-[3px] bg-accent" />
      {name}
    </>
  )
  if (!linked) return <span className={classes}>{content}</span>
  return (
    <Link href={getCategoryHref(category)} className={cn(classes, 'hover:text-foreground')}>
      {content}
    </Link>
  )
}

export function ArticleMeta({
  article,
  showAuthor = false,
  showReadingTime = true,
  className,
}: {
  article: Pick<Article, 'publishedAt' | 'readingTime' | 'author'>
  showAuthor?: boolean
  showReadingTime?: boolean
  className?: string
}) {
  return (
    <p
      className={cn(
        'swr-article-meta flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-muted-foreground',
        className,
      )}
    >
      {showAuthor && (
        <>
          <span className="font-semibold text-foreground">{article.author.name}</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-border" />
        </>
      )}
      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      {showReadingTime && (
        <>
          <span aria-hidden="true" className="size-1 rounded-full bg-border" />
          <span>{formatReadingTime(article.readingTime)}</span>
        </>
      )}
    </p>
  )
}
