import { AnalysisCard, ReportCard } from '@/components/site/editorial-cards'
import { SectionHeader } from '@/components/site/section-header'
import { getCategoryHref } from '@/lib/content'
import type { Article, Category } from '@/lib/types'

interface AnalysisSectionProps {
  feature: Article
  list: Article[]
  reports: Article[]
  subcategories: Category[]
}

export function AnalysisSection({ feature, list, reports, subcategories }: AnalysisSectionProps) {
  return (
    <section aria-labelledby="analysis-title" className="swr-analysis-section container-site py-12 md:py-16">
      <SectionHeader
        id="analysis-title"
        title="تحلیل و گزارش"
        eyebrow="Analysis & Reports"
        href="/category/analysis"
        links={subcategories.map((category) => ({
          label: category.name,
          href: getCategoryHref(category.slug),
        }))}
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <AnalysisCard article={feature} variant="feature" />
        </div>
        <div className="lg:col-span-5 lg:border-s lg:ps-10">
          {list.map((article) => (
            <AnalysisCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-14">
        <h3 className="mb-5 flex items-center justify-between text-lg font-extrabold">
          گزارش‌های تخصصی
          <span className="text-xs font-medium text-muted-foreground">ویژه مشترکان حرفه‌ای</span>
        </h3>
        <ul className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {reports.map((report) => (
            <li key={report.id} className="flex w-[78%] shrink-0 snap-start sm:w-[46%] md:w-auto">
              <ReportCard article={report} className="w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
