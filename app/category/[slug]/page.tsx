import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { NewsList } from '@/components/site/news-list'
import { PageHeader } from '@/components/site/page-header'
import { NewsCard } from '@/components/site/story-cards'
import {
  getAllCategories,
  getArticlesByCategory,
  getCategory,
  getCategoryHref,
  getTechTopic,
  getTechTopics,
} from '@/lib/content'
import { cn } from '@/lib/utils'
import type { TechTopicSlug } from '@/lib/types'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ topic?: string }>
}

export function generateStaticParams() {
  return getAllCategories()
    .filter((category) => category.slug !== 'companies')
    .map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug)
  if (!category) return {}
  return { title: category.name, description: category.description }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params
  if (slug === 'companies') redirect('/companies')
  const category = getCategory(slug)
  if (!category) notFound()

  const isTechnology = category.slug === 'technology'
  const topicParam = (await searchParams).topic
  const activeTopic = isTechnology && topicParam ? getTechTopic(topicParam as TechTopicSlug) : undefined

  let articles = getArticlesByCategory(category.includes ?? category.slug)
  if (activeTopic) articles = articles.filter((article) => article.topic === activeTopic.slug)

  const featured = articles.slice(0, 3)
  const rest = articles.slice(3)
  const children = category.includes?.filter((child) => child !== category.slug)

  return (
    <>
      <PageHeader
        eyebrow={category.nameEn}
        title={activeTopic ? `${category.name}: ${activeTopic.name}` : category.name}
        description={activeTopic?.description ?? category.description}
        breadcrumbs={[{ label: category.name, href: getCategoryHref(category.slug) }]}
      >
        {(children?.length || isTechnology) && (
          <nav aria-label="زیربخش‌ها" className="mt-6">
            <ul className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
              {children?.map((child) => (
                <li key={child} className="shrink-0">
                  <Link
                    href={getCategoryHref(child)}
                    className="inline-block border px-3 py-1.5 text-[13px] font-semibold hover:border-primary hover:text-primary"
                  >
                    {getCategory(child)?.name}
                  </Link>
                </li>
              ))}
              {isTechnology && (
                <>
                  <li className="shrink-0">
                    <TopicLink href="/category/technology" active={!activeTopic} label="همه" />
                  </li>
                  {getTechTopics().map((topic) => (
                    <li key={topic.slug} className="shrink-0">
                      <TopicLink
                        href={`/category/technology?topic=${topic.slug}`}
                        active={activeTopic?.slug === topic.slug}
                        label={topic.name}
                      />
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>
        )}
      </PageHeader>

      <div className="container-site py-10 md:py-14">
        {articles.length === 0 ? (
          <p className="border bg-card p-8 text-center text-muted-foreground">
            هنوز مطلبی در این بخش منتشر نشده است.
          </p>
        ) : (
          <>
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {featured.map((article, index) => (
                <li key={article.id}>
                  <NewsCard article={article} priority={index === 0} />
                </li>
              ))}
            </ul>
            {rest.length > 0 && (
              <div className="mt-10 border-t-2 border-foreground pt-2 lg:w-2/3">
                <NewsList articles={rest} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

function TopicLink({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'inline-block border px-3 py-1.5 text-[13px] font-semibold',
        active ? 'border-primary bg-primary text-white' : 'hover:border-primary hover:text-primary',
      )}
    >
      {label}
    </Link>
  )
}
