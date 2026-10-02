import { ArrowLeft, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getArticleHref, getTechTopic } from '@/lib/content'
import { formatDate, formatNumber } from '@/lib/format'
import { cn } from '@/lib/utils'
import type { Article, Company } from '@/lib/types'
import { ArticleMeta, CategoryLabel } from './article-meta'

function AuthorLine({ article, tone = 'light' }: { article: Article; tone?: 'light' | 'dark' }) {
  return (
    <p className={cn('text-[13px]', tone === 'dark' ? 'text-white/70' : 'text-muted-foreground')}>
      <span className={cn('font-bold', tone === 'dark' ? 'text-white' : 'text-foreground')}>
        {article.author.name}
      </span>
      {article.author.role && <span>{` — ${article.author.role}`}</span>}
    </p>
  )
}

export function AnalysisCard({
  article,
  variant = 'compact',
}: {
  article: Article
  variant?: 'feature' | 'compact'
}) {
  const href = getArticleHref(article)
  if (variant === 'feature') {
    return (
      <article className="swr-analysis-card swr-analysis-card--feature group">
        {article.image && (
          <Link
            href={href}
            tabIndex={-1}
            aria-hidden="true"
            className="relative block aspect-[16/10] overflow-hidden bg-muted"
          >
            <Image
              src={article.image}
              alt={article.imageAlt ?? ''}
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </Link>
        )}
        <div className="pt-5">
          <CategoryLabel category={article.category} />
          <h3 className="mt-3 text-balance text-2xl font-extrabold leading-[1.55] md:text-[30px]">
            <Link href={href} className="transition-colors hover:text-primary">
              {article.title}
            </Link>
          </h3>
          <p className="mt-3 text-pretty text-base leading-8 text-muted-foreground">
            {article.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
            <AuthorLine article={article} />
            <ArticleMeta article={article} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="swr-analysis-card group border-b py-6 first:pt-0 last:border-b-0 last:pb-0">
      <CategoryLabel category={article.category} />
      <h3 className="mt-2.5 text-pretty text-lg font-extrabold leading-8 md:text-xl md:leading-9">
        <Link href={href} className="transition-colors hover:text-primary">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-[15px] leading-7 text-muted-foreground">
        {article.excerpt}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <AuthorLine article={article} />
        <ArticleMeta article={article} />
      </div>
    </article>
  )
}

export function ReportCard({ article, className }: { article: Article; className?: string }) {
  const href = getArticleHref(article)
  return (
    <article
      className={cn(
        'swr-report-card group relative flex flex-col border border-t-4 border-t-primary bg-card p-5 transition-colors hover:border-t-accent',
        className,
      )}
    >
      <header className="flex items-center justify-between gap-3 text-xs">
        <span className="font-bold text-primary">گزارش تخصصی</span>
        {article.report && (
          <span className="text-muted-foreground">{article.report.issue}</span>
        )}
      </header>
      <h3 className="mt-4 text-pretty text-[17px] font-extrabold leading-8">
        <Link href={href} className="after:absolute after:inset-0 hover:text-primary">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted-foreground">{article.excerpt}</p>
      <footer className="mt-auto flex items-center justify-between gap-3 border-t pt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <FileText aria-hidden="true" className="size-3.5" />
          {article.report && (
            <span>
              {`${formatNumber(article.report.pages)} صفحه · `}
              <span dir="ltr">{article.report.format}</span>
            </span>
          )}
        </span>
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      </footer>
    </article>
  )
}

export function CompanyCard({ company, className }: { company: Company; className?: string }) {
  return (
    <article
      className={cn(
        'swr-company-card group relative flex flex-col border bg-card p-5 transition-colors hover:border-primary',
        className,
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          dir="ltr"
          className="grid size-14 shrink-0 place-items-center border bg-secondary text-[13px] font-extrabold tracking-wider text-primary"
        >
          {company.initials}
        </span>
        <span className="border px-2 py-1 text-[11px] font-medium text-muted-foreground">
          {`${company.country}، ${company.city}`}
        </span>
      </header>
      <h3 className="mt-4 text-lg font-extrabold">
        <Link
          href={`/companies/${company.slug}`}
          className="after:absolute after:inset-0 group-hover:text-primary"
        >
          {company.name}
        </Link>
      </h3>
      <p dir="ltr" className="mt-0.5 text-end text-xs font-medium text-muted-foreground">
        {company.nameEn}
      </p>
      <p className="mt-3 text-[13px] font-bold text-primary">{company.activity}</p>
      <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted-foreground">
        {company.description}
      </p>
      <dl className="mt-auto grid grid-cols-2 gap-3 border-t pt-4 text-xs">
        <div>
          <dt className="text-muted-foreground">سال تأسیس</dt>
          <dd className="mt-1 font-bold tabular-nums">
            {formatNumber(company.founded).replace(/٬/g, '')}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">ظرفیت سالانه</dt>
          <dd className="mt-1 font-bold">{company.capacity ?? '—'}</dd>
        </div>
      </dl>
    </article>
  )
}

export function TechnologyCard({
  article,
  variant = 'row',
}: {
  article: Article
  variant?: 'feature' | 'row'
}) {
  const href = getArticleHref(article)
  const topic = article.topic ? getTechTopic(article.topic) : undefined
  const feature = variant === 'feature'

  return (
    <article
      className={cn(
        'swr-technology-card group',
        feature ? 'flex flex-col' : 'flex items-start gap-4 border-b py-5 first:pt-0 last:border-b-0 last:pb-0',
      )}
    >
      {article.image && (
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden="true"
          className={cn(
            'relative block shrink-0 overflow-hidden bg-muted',
            feature ? 'aspect-[16/10] w-full' : 'aspect-square w-24 md:aspect-[4/3] md:w-40',
          )}
        >
          <Image
            src={article.image}
            alt={article.imageAlt ?? ''}
            fill
            sizes={feature ? '(min-width: 1024px) 620px, 100vw' : '160px'}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Link>
      )}
      <div className={cn('min-w-0 flex-1', feature && 'pt-5')}>
        {topic && (
          <p className="text-[13px] font-bold text-primary">
            <span aria-hidden="true" className="me-2 inline-block h-2.5 w-[3px] bg-accent align-middle" />
            {topic.name}
          </p>
        )}
        <h3
          className={cn(
            'mt-2 text-pretty font-extrabold',
            feature ? 'text-2xl leading-[1.6] md:text-[28px]' : 'text-base leading-8 md:text-lg',
          )}
        >
          <Link href={href} className="transition-colors hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <p
          className={cn(
            'mt-2 text-muted-foreground',
            feature ? 'text-base leading-8' : 'hidden line-clamp-2 text-sm leading-7 md:block',
          )}
        >
          {article.excerpt}
        </p>
        <ArticleMeta article={article} className="mt-3" />
      </div>
    </article>
  )
}

export function InterviewCard({ article }: { article: Article }) {
  const person = article.interviewee
  if (!person) return null
  const href = getArticleHref(article)
  return (
    <article className="swr-interview-card group flex gap-4 md:flex-col md:gap-0">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[4/5] w-28 shrink-0 overflow-hidden bg-muted md:w-full"
      >
        <Image
          src={person.portrait}
          alt=""
          fill
          sizes="(min-width: 768px) 400px, 112px"
          className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </Link>
      <div className="min-w-0 flex-1 md:pt-5">
        <p className="text-[13px] font-bold text-primary">
          <span aria-hidden="true" className="me-2 inline-block h-2.5 w-[3px] bg-accent align-middle" />
          گفت‌وگو
        </p>
        <h3 className="mt-2 text-pretty text-base font-extrabold leading-8 md:text-xl md:leading-9">
          <Link href={href} className="transition-colors hover:text-primary">
            {`«${article.title}»`}
          </Link>
        </h3>
        <div className="mt-3 border-t pt-3 md:mt-4">
          <p className="text-[15px] font-bold">{person.name}</p>
          <p className="mt-0.5 text-[13px] leading-6 text-muted-foreground">
            {`${person.position}، ${person.company}`}
          </p>
        </div>
      </div>
    </article>
  )
}

export function ViewMoreLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-foreground"
    >
      {label}
      <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-0.5" />
    </Link>
  )
}
