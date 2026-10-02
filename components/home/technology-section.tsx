import Link from 'next/link'
import { TechnologyCard } from '@/components/site/editorial-cards'
import { SectionHeader } from '@/components/site/section-header'
import type { Article, TechTopic } from '@/lib/types'

interface TechnologySectionProps {
  feature: Article
  list: Article[]
  topics: TechTopic[]
}

export function TechnologySection({ feature, list, topics }: TechnologySectionProps) {
  return (
    <section aria-labelledby="technology-title" className="swr-technology-section container-site py-12 md:py-16">
      <SectionHeader
        id="technology-title"
        title="فناوری و نوآوری"
        eyebrow="Technology"
        href="/category/technology"
      />

      <nav aria-label="حوزه‌های فناوری" className="mb-10">
        <ul className="grid grid-cols-2 border-s border-t md:grid-cols-3 xl:grid-cols-6">
          {topics.map((topic, index) => (
            <li key={topic.slug} className="border-e border-b">
              <Link
                href={`/category/technology?topic=${topic.slug}`}
                className="group flex h-full flex-col gap-1.5 bg-card p-4 transition-colors hover:bg-primary"
              >
                <span
                  dir="ltr"
                  className="text-end text-[11px] font-bold tabular-nums text-muted-foreground group-hover:text-accent"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] font-extrabold group-hover:text-white">{topic.name}</span>
                <span className="text-xs leading-6 text-muted-foreground group-hover:text-white/70">
                  {topic.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <TechnologyCard article={feature} variant="feature" />
        </div>
        <div className="lg:col-span-6">
          {list.map((article) => (
            <TechnologyCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
