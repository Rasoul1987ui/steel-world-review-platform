import { formatPercent, formatSigned } from '@/lib/format'
import { cn } from '@/lib/utils'

interface PriceChangeProps {
  change: number
  changePercent: number
  decimals?: number
  tone?: 'light' | 'dark'
  showAbsolute?: boolean
  className?: string
}

export function getTrendClass(value: number, tone: 'light' | 'dark') {
  if (value === 0) return tone === 'dark' ? 'text-white/60' : 'text-muted-foreground'
  if (value > 0) return tone === 'dark' ? 'text-accent' : 'text-positive'
  return tone === 'dark' ? 'text-negative-soft' : 'text-negative'
}

export function PriceChange({
  change,
  changePercent,
  decimals = 0,
  tone = 'light',
  showAbsolute = true,
  className,
}: PriceChangeProps) {
  const direction = change > 0 ? 'افزایش' : change < 0 ? 'کاهش' : 'بدون تغییر'
  return (
    <span
      className={cn(
        'swr-price-change inline-flex items-center gap-2 font-semibold tabular-nums',
        getTrendClass(change, tone),
        className,
      )}
    >
      <span className="sr-only">{direction}</span>
      <span aria-hidden="true" className="text-[10px] leading-none">
        {change > 0 ? '▲' : change < 0 ? '▼' : '■'}
      </span>
      {showAbsolute && <span dir="ltr">{formatSigned(change, decimals)}</span>}
      <span dir="ltr">({formatPercent(changePercent)})</span>
    </span>
  )
}
