import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  tone?: 'light' | 'dark'
  className?: string
}

export function Logo({ tone = 'light', className }: LogoProps) {
  const isDark = tone === 'dark'
  return (
    <Link
      href="/"
      aria-label="گزیده جهان فولاد - صفحه اصلی"
      className={cn('swr-logo group flex shrink-0 items-center gap-2.5', className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          'flex size-9 flex-col justify-end gap-[3px] p-[7px] md:size-10',
          isDark ? 'bg-white' : 'bg-primary',
        )}
      >
        <span className={cn('h-[3px] w-full', isDark ? 'bg-primary' : 'bg-white/90')} />
        <span className={cn('h-[3px] w-full', isDark ? 'bg-primary' : 'bg-white/90')} />
        <span className="h-[5px] w-full bg-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-[17px] font-extrabold tracking-tight md:text-xl',
            isDark ? 'text-white' : 'text-foreground',
          )}
        >
          گزیده جهان فولاد
        </span>
        <span
          dir="ltr"
          className={cn(
            'mt-1.5 text-end text-[9px] font-semibold tracking-[0.24em] md:text-[10px]',
            isDark ? 'text-white/55' : 'text-muted-foreground',
          )}
        >
          STEEL WORLD REVIEW
        </span>
      </span>
    </Link>
  )
}
