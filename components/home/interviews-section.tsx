import { InterviewCard } from '@/components/site/editorial-cards'
import { SectionHeader } from '@/components/site/section-header'
import type { Article } from '@/lib/types'

export function InterviewsSection({ interviews }: { interviews: Article[] }) {
  return (
    <section aria-labelledby="interviews-title" className="swr-interviews-section border-t bg-secondary py-12 md:py-16">
      <div className="container-site">
        <SectionHeader
          id="interviews-title"
          title="مصاحبه‌ها"
          eyebrow="Interviews"
          description="گفت‌وگو با مدیران و متخصصانی که آینده صنعت فولاد را شکل می‌دهند."
          href="/category/interviews"
        />
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {interviews.map((article) => (
            <li key={article.id} className="border-b pb-6 last:border-b-0 md:border-b-0 md:pb-0">
              <InterviewCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
