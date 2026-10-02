import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/lib/types'

interface SectionHeaderProps {
  title: string
  eyebrow?: string
  description?: string
  href?: string
  linkLabel?: string
  links?: NavItem[]
  tone?: 'light' | 'dark'
  as?: 'h1' | 'h2'
  id?: string
  className?: string
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  href,
  linkLabel = 'مشاهده همه',
  links,
  tone = 'light',
  as: Heading = 'h2',
  id,
  className,
}: SectionHeaderProps) {
  const isDark = tone === 'dark'
  return (
    <header
      className={cn(
        'swr-section-header mb-6 border-t-2 pt-4 md:mb-8',
        isDark ? 'border-white' : 'border-foreground',
        className,
      )}
    >
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          {eyebrow && (
            <p
              dir="ltr"
              className={cn(
                'mb-1.5 text-end text-[11px] font-semibold tracking-[0.2em] uppercase',
                isDark ? 'text-accent' : 'text-primary',
              )}
            >
              {eyebrow}
            </p>
          )}
          <Heading
            id={id}
            className={cn(
              'text-2xl font-extrabold tracking-tight md:text-[28px]',
              isDark ? 'text-white' : 'text-foreground',
            )}
          >
            {title}
          </Heading>
        </div>
        {href && (
          <Link
            href={href}
            className={cn(
              'group flex shrink-0 items-center gap-1.5 text-sm font-semibold transition-colors',
              isDark ? 'text-white/80 hover:text-white' : 'text-primary hover:text-foreground',
            )}
          >
            {linkLabel}
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-x-0.5"
            />
          </Link>
        )}
      </div>
      {description && (
        <p
          className={cn(
            'mt-2 max-w-2xl text-sm leading-7 md:text-[15px]',
            isDark ? 'text-white/65' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
      {links && links.length > 0 && (
        <nav aria-label={`زیربخش‌های ${title}`} className="mt-4">
          <ul className="scrollbar-none -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
            {links.map((link) => (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={cn(
                    'inline-flex h-8 items-center border px-3 text-[13px] font-medium transition-colors',
                    isDark
                      ? 'border-white/20 text-white/80 hover:border-white hover:text-white'
                      : 'border-border bg-card text-foreground hover:border-primary hover:text-primary',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
