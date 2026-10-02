import { NewsList } from '@/components/site/news-list'
import { SectionHeader } from '@/components/site/section-header'
import { BriefFeed, NewsCard } from '@/components/site/story-cards'
import type { Article, NewsBrief } from '@/lib/types'

interface LatestNewsSectionProps {
  featured: Article[]
  list: Article[]
  briefs: NewsBrief[]
}

export function LatestNewsSection({ featured, list, briefs }: LatestNewsSectionProps) {
  return (
    <section aria-labelledby="latest-news-title" className="swr-latest-news container-site py-12 md:py-16">
      <SectionHeader
        id="latest-news-title"
        title="آخرین اخبار"
        eyebrow="Latest News"
        href="/category/news"
        linkLabel="آرشیو اخبار"
      />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <ul className="grid gap-8 border-b pb-8 md:grid-cols-2 md:gap-6">
            {featured.map((article) => (
              <li key={article.id}>
                <NewsCard article={article} />
              </li>
            ))}
          </ul>
          <NewsList articles={list} />
        </div>
        <aside className="lg:col-span-4" aria-label="اخبار کوتاه">
          <div className="lg:sticky lg:top-28">
            <BriefFeed briefs={briefs} />
          </div>
        </aside>
      </div>
    </section>
  )
}
