import { formatDate, formatTime } from '@/lib/format'
import { cn } from '@/lib/utils'
import type { MarketItem, MarketMeta } from '@/lib/types'
import { MarketCard } from './market-card'
import { SectionHeader } from './section-header'

interface MarketDashboardProps {
  items: MarketItem[]
  meta: MarketMeta
  headingAs?: 'h1' | 'h2'
  showLink?: boolean
  className?: string
}

export function MarketDashboard({
  items,
  meta,
  headingAs = 'h2',
  showLink = true,
  className,
}: MarketDashboardProps) {
  return (
    <section
      aria-labelledby="market-dashboard-title"
      className={cn('swr-market-dashboard bg-navy py-12 text-white md:py-16', className)}
    >
      <div className="container-site">
        <SectionHeader
          id="market-dashboard-title"
          as={headingAs}
          tone="dark"
          eyebrow="Market Intelligence"
          title="داشبورد بازار فولاد"
          description="قیمت‌های مرجع محصولات فولادی، مواد اولیه و ارز؛ به‌روزرسانی روزانه بر اساس معاملات بورس کالا و بازارهای بین‌المللی."
          href={showLink ? '/market' : undefined}
          linkLabel="داده‌های کامل بازار"
        />

        <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-3 xl:grid-cols-6">
          {items.map((item) => (
            <MarketCard key={item.id} item={item} />
          ))}
        </div>

        <p className="mt-4 flex flex-col gap-1 text-xs text-white/50 md:flex-row md:justify-between">
          <span>{`منبع: ${meta.source}`}</span>
          <span>
            {'آخرین به‌روزرسانی: '}
            <time dateTime={meta.updatedAt}>
              {`${formatDate(meta.updatedAt)}، ساعت ${formatTime(meta.updatedAt)}`}
            </time>
          </span>
        </p>
      </div>
    </section>
  )
}
