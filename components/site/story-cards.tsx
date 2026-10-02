import Image from 'next/image'
import Link from 'next/link'
import { getArticleHref } from '@/lib/content'
import { formatTime } from '@/lib/format'
import { cn } from '@/lib/utils'
import type { Article, NewsBrief } from '@/lib/types'
import { ArticleMeta, CategoryLabel } from './article-meta'

function CardImage({
  article,
  sizes,
  priority,
  className,
}: {
  article: Article
  sizes: string
  priority?: boolean
  className?: string
}) {
  if (!article.image) return null
  return (
    <Link
      href={getArticleHref(article)}
      tabIndex={-1}
      aria-hidden="true"
      className={cn('relative block overflow-hidden bg-muted', className)}
    >
      <Image
        src={article.image}
        alt={article.imageAlt ?? ''}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </Link>
  )
}

export function HeroStory({ article }: { article: Article }) {
  return (
    <article className="swr-hero-story group">
      <CardImage
        article={article}
        priority
        sizes="(min-width: 1024px) 860px, 100vw"
        className="aspect-[16/10] lg:aspect-[16/9]"
      />
      <div className="pt-5 lg:pt-6">
        <CategoryLabel category={article.category} />
        <h2 className="mt-3 text-balance text-[26px] font-extrabold leading-[1.5] tracking-tight md:text-[34px] md:leading-[1.45] lg:text-[40px]">
          <Link href={getArticleHref(article)} className="transition-colors hover:text-primary">
            {article.title}
          </Link>
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
          {article.excerpt}
        </p>
        <ArticleMeta article={article} showAuthor className="mt-5" />
      </div>
    </article>
  )
}

export function SecondaryStory({
  article,
  layout = 'row',
  className,
}: {
  article: Article
  layout?: 'row' | 'stacked'
  className?: string
}) {
  const stacked = layout === 'stacked'
  return (
    <article
      className={cn(
        'swr-secondary-story group',
        stacked ? 'flex flex-col gap-4' : 'flex items-start gap-4',
        className,
      )}
    >
      <CardImage
        article={article}
        sizes={stacked ? '(min-width: 1024px) 400px, 50vw' : '128px'}
        className={stacked ? 'aspect-[16/9] w-full' : 'aspect-[4/3] w-28 shrink-0 md:w-32'}
      />
      <div className="min-w-0 flex-1">
        <CategoryLabel category={article.category} />
        <h3
          className={cn(
            'mt-2 text-pretty font-bold',
            stacked ? 'text-lg leading-8 md:text-xl md:leading-9' : 'text-[15px] leading-7',
          )}
        >
          <Link href={getArticleHref(article)} className="transition-colors hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <ArticleMeta article={article} showReadingTime={stacked} className="mt-2" />
      </div>
    </article>
  )
}

export function NewsCard({ article, priority }: { article: Article; priority?: boolean }) {
  return (
    <article className="swr-news-card group flex flex-col">
      <CardImage
        article={article}
        priority={priority}
        sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
        className="aspect-[3/2]"
      />
      <div className={cn('flex flex-1 flex-col', article.image && 'pt-4')}>
        <CategoryLabel category={article.category} />
        <h3 className="mt-2 text-pretty text-lg font-bold leading-8 md:text-xl md:leading-9">
          <Link href={getArticleHref(article)} className="transition-colors hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-7 text-muted-foreground">
          {article.excerpt}
        </p>
        <ArticleMeta article={article} className="mt-auto pt-3" />
      </div>
    </article>
  )
}

export function NewsListItem({ article }: { article: Article }) {
  return (
    <article className="swr-news-list-item group flex items-start gap-4 py-5 md:gap-6">
      <time
        dateTime={article.publishedAt}
        className="hidden w-14 shrink-0 pt-1 text-sm font-bold tabular-nums text-primary md:block"
      >
        {formatTime(article.publishedAt)}
      </time>
      <div className="min-w-0 flex-1">
        <CategoryLabel category={article.category} />
        <h3 className="mt-1.5 text-pretty text-base font-bold leading-8 md:text-lg">
          <Link href={getArticleHref(article)} className="transition-colors hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <p className="mt-1 hidden line-clamp-2 text-sm leading-7 text-muted-foreground md:block">
          {article.excerpt}
        </p>
        <ArticleMeta article={article} className="mt-2" />
      </div>
      <CardImage
        article={article}
        sizes="(min-width: 768px) 176px, 96px"
        className="aspect-[4/3] w-24 shrink-0 md:w-44"
      />
    </article>
  )
}

export function BriefFeed({ briefs, title = 'خبر کوتاه' }: { briefs: NewsBrief[]; title?: string }) {
  return (
    <section aria-labelledby="brief-feed-title" className="swr-brief-feed border bg-card">
      <header className="flex items-center justify-between border-b px-5 py-4">
        <h3 id="brief-feed-title" className="text-base font-extrabold">
          {title}
        </h3>
        <span className="flex items-center gap-2 text-xs font-semibold text-positive">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-positive opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-positive" />
          </span>
          لحظه به لحظه
        </span>
      </header>
      <ol className="px-5">
        {briefs.map((brief) => (
          <li key={brief.id} className="relative flex gap-4 border-b py-4 last:border-b-0">
            <time
              dateTime={brief.publishedAt}
              className="w-11 shrink-0 pt-0.5 text-[13px] font-bold tabular-nums text-primary"
            >
              {formatTime(brief.publishedAt)}
            </time>
            <p className="text-[15px] font-medium leading-7 text-foreground">{brief.title}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
