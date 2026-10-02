import Link from 'next/link'
import { getMarketItems } from '@/lib/content'
import { formatNumber } from '@/lib/format'
import { PriceChange } from './price-change'

export function MarketTicker() {
  const items = getMarketItems()
  return (
    <section aria-label="خلاصه بازار" className="swr-market-ticker border-b bg-card">
      <div className="container-site flex h-11 items-center gap-4">
        <Link
          href="/market"
          className="flex shrink-0 items-center gap-2 border-e pe-4 text-[13px] font-bold text-primary hover:text-foreground"
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-positive" />
          بازار امروز
        </Link>
        <ul className="scrollbar-none flex min-w-0 flex-1 items-center gap-6 overflow-x-auto text-[13px] xl:justify-between">
          {items.map((item) => (
            <li key={item.id} className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <span className="text-muted-foreground">{item.name}</span>
              <span className="font-semibold tabular-nums text-foreground">
                {formatNumber(item.value, item.decimals)}
              </span>
              <PriceChange
                change={item.change}
                changePercent={item.changePercent}
                showAbsolute={false}
                className="text-xs"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
