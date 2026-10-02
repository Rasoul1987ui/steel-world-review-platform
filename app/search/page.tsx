import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import { NewsList } from '@/components/site/news-list'
import { PageHeader } from '@/components/site/page-header'
import { searchArticles } from '@/lib/content'
import { formatNumber } from '@/lib/format'

export const metadata: Metadata = {
  title: 'جستجو',
  robots: { index: false },
}

type Props = { searchParams: Promise<{ q?: string }> }

export default async function SearchPage({ searchParams }: Props) {
  const query = ((await searchParams).q ?? '').trim()
  const results = searchArticles(query)

  return (
    <>
      <PageHeader title="جستجو" eyebrow="Search" breadcrumbs={[{ label: 'جستجو', href: '/search' }]}>
        <form action="/search" role="search" className="mt-6 flex max-w-2xl border bg-background focus-within:border-primary">
          <label htmlFor="search-page-input" className="sr-only">
            عبارت جستجو
          </label>
          <input
            id="search-page-input"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="جستجو در اخبار، تحلیل‌ها و گزارش‌ها…"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[15px] outline-none"
          />
          <button type="submit" className="flex items-center gap-2 bg-primary px-5 text-sm font-bold text-white hover:bg-navy">
            <Search className="size-4" aria-hidden="true" />
            جستجو
          </button>
        </form>
      </PageHeader>
      <div className="container-site py-10 md:py-14">
        {query ? (
          <>
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {`${formatNumber(results.length)} نتیجه برای «${query}»`}
            </p>
            {results.length > 0 ? (
              <NewsList articles={results} className="mt-2 lg:w-2/3" />
            ) : (
              <p className="mt-6 border bg-card p-8 text-center text-muted-foreground">
                نتیجه‌ای یافت نشد. عبارت دیگری را امتحان کنید.
              </p>
            )}
          </>
        ) : (
          <p className="text-muted-foreground">عبارت مورد نظر خود را وارد کنید.</p>
        )}
      </div>
    </>
  )
}
