import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArticleMeta, CategoryLabel } from '@/components/site/article-meta'
import { NewsList } from '@/components/site/news-list'
import { Newsletter } from '@/components/site/newsletter'
import { SectionHeader } from '@/components/site/section-header'
import { NewsCard } from '@/components/site/story-cards'
import { getAllArticles, getArticleBySlug, getCategoryHref, getRelatedArticles } from '@/lib/content'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug((await params).slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      images: article.image ? [article.image] : undefined,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticleBySlug((await params).slug)
  if (!article) notFound()

  const related = getRelatedArticles(article, 4)
  const body = article.body ?? [article.excerpt]

  return (
    <>
      <article className="swr-article container-site py-8 md:py-12">
        <header className="mx-auto max-w-3xl">
          <CategoryLabel category={article.category} />
          <h1 className="mt-4 text-balance text-[28px] font-extrabold leading-[1.45] md:text-[42px] md:leading-[1.35]">
            {article.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y py-4">
            <ArticleMeta article={article} showAuthor />
            {article.author.role && <span className="text-[13px] text-muted-foreground">{article.author.role}</span>}
          </div>
        </header>

        {article.image && (
          <figure className="mx-auto mt-8 max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <Image
                src={article.image}
                alt={article.imageAlt ?? ''}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            {article.imageAlt && (
              <figcaption className="mt-2 text-[13px] text-muted-foreground">{article.imageAlt}</figcaption>
            )}
          </figure>
        )}

        {article.interviewee && (
          <aside className="mx-auto mt-8 flex max-w-3xl items-center gap-4 border-s-4 border-accent bg-secondary p-5">
            <Image
              src={article.interviewee.portrait}
              alt={article.interviewee.name}
              width={72}
              height={72}
              className="size-[72px] shrink-0 object-cover grayscale"
            />
            <div>
              <p className="font-extrabold">{article.interviewee.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {`${article.interviewee.position}، ${article.interviewee.company}`}
              </p>
            </div>
          </aside>
        )}

        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-[17px] leading-[2.1] md:text-lg">
          {body.map((paragraph, index) => (
            <p key={index} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>

        {article.tags && article.tags.length > 0 && (
          <footer className="mx-auto mt-10 max-w-3xl border-t pt-6">
            <h2 className="sr-only">برچسب‌ها</h2>
            <ul className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <li key={tag}>
                  <a
                    href={`/search?q=${encodeURIComponent(tag)}`}
                    className="inline-block border px-3 py-1.5 text-[13px] font-semibold hover:border-primary hover:text-primary"
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t bg-card py-12">
          <div className="container-site">
            <SectionHeader
              id="related-title"
              title="مطالب مرتبط"
              href={getCategoryHref(article.category)}
              linkLabel="بیشتر در این بخش"
            />
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {related.map((item) => (
                <li key={item.id}>
                  <NewsCard article={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {related.length === 0 && (
        <div className="container-site pb-12">
          <NewsList articles={getAllArticles().filter((a) => a.slug !== article.slug).slice(0, 4)} />
        </div>
      )}
      <Newsletter />
    </>
  )
}
