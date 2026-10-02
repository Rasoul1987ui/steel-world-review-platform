import { CompanyCard } from '@/components/site/editorial-cards'
import { SectionHeader } from '@/components/site/section-header'
import type { Company } from '@/lib/types'

export function CompaniesSection({ companies }: { companies: Company[] }) {
  return (
    <section aria-labelledby="companies-title" className="swr-companies-section border-y bg-card py-12 md:py-16">
      <div className="container-site">
        <SectionHeader
          id="companies-title"
          title="شرکت‌های صنعت فولاد"
          eyebrow="Company Directory"
          description="پروفایل فولادسازان، معدن‌کاران، سازندگان تجهیزات و شرکت‌های بازرگانی فعال در زنجیره ارزش فولاد."
          href="/companies"
          linkLabel="بانک اطلاعات شرکت‌ها"
        />
        <ul className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {companies.map((company) => (
            <li key={company.id} className="flex w-[80%] shrink-0 snap-start sm:w-[46%] md:w-auto">
              <CompanyCard company={company} className="w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
