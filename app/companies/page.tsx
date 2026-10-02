import type { Metadata } from 'next'
import { CompanyCard } from '@/components/site/editorial-cards'
import { NewsList } from '@/components/site/news-list'
import { PageHeader } from '@/components/site/page-header'
import { getArticlesByCategory, getCompanies } from '@/lib/content'

export const metadata: Metadata = {
  title: 'شرکت‌های صنعت فولاد',
  description: 'بانک اطلاعات فولادسازان، معدن‌کاران، سازندگان تجهیزات و شرکت‌های بازرگانی فعال در زنجیره ارزش فولاد.',
}

export default function CompaniesPage() {
  const companies = getCompanies()
  const news = getArticlesByCategory('companies')

  return (
    <>
      <PageHeader
        eyebrow="Company Directory"
        title="شرکت‌های صنعت فولاد"
        description="پروفایل فولادسازان، معدن‌کاران، سازندگان تجهیزات و شرکت‌های بازرگانی فعال در زنجیره ارزش فولاد."
        breadcrumbs={[{ label: 'شرکت‌ها', href: '/companies' }]}
      />
      <div className="container-site py-10 md:py-14">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <li key={company.id} className="flex">
              <CompanyCard company={company} className="w-full" />
            </li>
          ))}
        </ul>
        {news.length > 0 && (
          <section aria-labelledby="company-news" className="mt-14 lg:w-2/3">
            <h2 id="company-news" className="border-t-2 border-foreground pt-3 text-lg font-extrabold">
              اخبار شرکت‌ها
            </h2>
            <NewsList articles={news} />
          </section>
        )}
      </div>
    </>
  )
}
