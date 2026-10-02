import { formatNumber } from '@/lib/format'
import { cn } from '@/lib/utils'
import type { MarketItem } from '@/lib/types'
import { getTrendClass, PriceChange } from './price-change'
import { Sparkline } from './sparkline'

interface MarketCardProps {
  item: MarketItem
  tone?: 'light' | 'dark'
  className?: string
}

export function MarketCard({ item, tone = 'dark', className }: MarketCardProps) {
  const isDark = tone === 'dark'
  return (
    <article
      id={item.id}
      aria-label={item.name}
      className={cn(
        'swr-market-card flex scroll-mt-32 flex-col p-4 md:p-5',
        isDark ? 'bg-navy' : 'bg-card',
        className,
      )}
    >
      <header className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3
            className={cn(
              'text-sm font-bold md:text-[15px]',
              isDark ? 'text-white' : 'text-foreground',
            )}
          >
            {item.name}
          </h3>
          <p
            dir="ltr"
            className={cn(
              'mt-1 text-end text-[11px] font-medium tracking-wide',
              isDark ? 'text-white/45' : 'text-muted-foreground',
            )}
          >
            {item.nameEn}
          </p>
        </div>
        <span
          className={cn(
            'hidden shrink-0 border px-1.5 py-0.5 text-[10px] font-medium sm:inline-block',
            isDark ? 'border-white/15 text-white/55' : 'border-border text-muted-foreground',
          )}
        >
          {item.basis}
        </span>
      </header>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p
            className={cn(
              'text-[22px] font-bold leading-none tabular-nums md:text-[26px]',
              isDark ? 'text-white' : 'text-foreground',
            )}
          >
            {formatNumber(item.value, item.decimals)}
          </p>
          <p className={cn('mt-2 text-[11px]', isDark ? 'text-white/50' : 'text-muted-foreground')}>
            {item.unit}
          </p>
        </div>
        <Sparkline
          data={item.trend}
          className={cn('h-9 w-16 shrink-0 md:h-10 md:w-24', getTrendClass(item.change, tone))}
        />
      </div>

      <footer
        className={cn('mt-4 border-t pt-3 text-xs md:text-[13px]', isDark && 'border-white/10')}
      >
        <PriceChange
          change={item.change}
          changePercent={item.changePercent}
          decimals={item.decimals}
          tone={tone}
        />
      </footer>
    </article>
  )
}
