import type { Metadata } from 'next'
import { PriceChange } from '@/components/site/price-change'
import { MarketDashboard } from '@/components/site/market-dashboard'
import { NewsList } from '@/components/site/news-list'
import { Sparkline } from '@/components/site/sparkline'
import { getArticlesByCategory, getMarketItems, getMarketMeta } from '@/lib/content'
import { formatNumber } from '@/lib/format'

export const metadata: Metadata = {
  title: 'داشبورد بازار فولاد',
  description: 'قیمت روز شمش، میلگرد، ورق، سنگ آهن، قراضه و نرخ ارز؛ داده‌های مرجع بازار فولاد.',
}

export default function MarketPage() {
  const items = getMarketItems()
  const marketNews = getArticlesByCategory(['market', 'outlook'])

  return (
    <>
      <MarketDashboard items={items} meta={getMarketMeta()} headingAs="h1" showLink={false} />
      <div className="container-site grid gap-10 py-10 md:py-14 lg:grid-cols-12">
        <section aria-labelledby="price-table-title" className="lg:col-span-8">
          <h2 id="price-table-title" className="border-t-2 border-foreground pt-3 text-lg font-extrabold">
            جدول قیمت‌های مرجع
          </h2>
          <div className="mt-4 overflow-x-auto border bg-card">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-secondary text-start text-[13px] text-muted-foreground">
                <tr>
                  <th scope="col" className="p-3 text-start font-semibold">محصول</th>
                  <th scope="col" className="p-3 text-start font-semibold">قیمت</th>
                  <th scope="col" className="p-3 text-start font-semibold">تغییر</th>
                  <th scope="col" className="p-3 text-start font-semibold">مبنا</th>
                  <th scope="col" className="p-3 text-start font-semibold">روند</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {items.map((item) => (
                  <tr key={item.id} id={item.id} className="scroll-mt-32 target:bg-accent/10">
                    <th scope="row" className="p-3 text-start">
                      <span className="block font-extrabold">{item.name}</span>
                      <span dir="ltr" className="text-xs font-normal text-muted-foreground">{item.nameEn}</span>
                    </th>
                    <td className="p-3 whitespace-nowrap">
                      <span className="font-extrabold tabular-nums">{formatNumber(item.value, item.decimals)}</span>
                      <span className="ms-1 text-xs text-muted-foreground">{item.unit}</span>
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <PriceChange change={item.change} changePercent={item.changePercent} decimals={item.decimals} tone="light" />
                    </td>
                    <td className="p-3 text-xs text-muted-foreground">{item.basis}</td>
                    <td className="p-3 text-primary">
                      <Sparkline data={item.trend} width={96} height={32} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section aria-labelledby="market-news-title" className="lg:col-span-4">
          <h2 id="market-news-title" className="border-t-2 border-foreground pt-3 text-lg font-extrabold">
            اخبار و چشم‌انداز بازار
          </h2>
          <NewsList articles={marketNews} />
        </section>
      </div>
    </>
  )
}
