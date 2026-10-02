import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NewsList } from '@/components/site/news-list'
import { PageHeader } from '@/components/site/page-header'
import { getCompanies, getCompanyBySlug, searchArticles } from '@/lib/content'
import { formatNumber } from '@/lib/format'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getCompanies().map((company) => ({ slug: company.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = getCompanyBySlug((await params).slug)
  if (!company) return {}
  return { title: company.name, description: company.description }
}

export default async function CompanyPage({ params }: Props) {
  const company = getCompanyBySlug((await params).slug)
  if (!company) notFound()

  const coverage = searchArticles(company.name)
  const facts = [
    { label: 'حوزه فعالیت', value: company.activity },
    { label: 'موقعیت', value: `${company.city}، ${company.country}` },
    { label: 'سال تأسیس', value: formatNumber(company.founded).replace(/٬/g, '') },
    ...(company.capacity ? [{ label: 'ظرفیت', value: company.capacity }] : []),
  ]

  return (
    <>
      <PageHeader
        eyebrow={company.nameEn}
        title={company.name}
        description={company.description}
        breadcrumbs={[
          { label: 'شرکت‌ها', href: '/companies' },
          { label: company.name, href: `/companies/${company.slug}` },
        ]}
      />
      <div className="container-site grid gap-10 py-10 md:py-14 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="border bg-card">
            <div className="flex items-center gap-4 border-b p-5">
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center bg-primary text-lg font-extrabold text-white"
              >
                {company.initials}
              </span>
              <p dir="ltr" className="text-sm font-semibold text-muted-foreground">
                {company.nameEn}
              </p>
            </div>
            <dl className="divide-y">
              {facts.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4 p-4 text-sm">
                  <dt className="text-muted-foreground">{fact.label}</dt>
                  <dd className="text-end font-bold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
        <section aria-labelledby="coverage-title" className="lg:col-span-8">
          <h2 id="coverage-title" className="border-t-2 border-foreground pt-3 text-lg font-extrabold">
            پوشش خبری
          </h2>
          {coverage.length > 0 ? (
            <NewsList articles={coverage} />
          ) : (
            <p className="mt-4 text-muted-foreground">مطلب مرتبطی با این شرکت منتشر نشده است.</p>
          )}
        </section>
      </div>
    </>
  )
}
