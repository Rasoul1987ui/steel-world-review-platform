import { BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { getMarketMeta } from '@/lib/content'
import { mainNavigation, utilityNavigation } from '@/lib/data/site'
import { formatLongDate } from '@/lib/format'
import { HeaderSearch } from './header-search'
import { Logo } from './logo'
import { MarketTicker } from './market-ticker'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  const { updatedAt } = getMarketMeta()
  return (
    <>
      <div className="swr-topbar hidden border-b bg-navy text-white/70 md:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <p>
            <time dateTime={updatedAt}>{formatLongDate(updatedAt)}</time>
          </p>
          <nav aria-label="پیوندهای کمکی">
            <ul className="flex items-center gap-5">
              {utilityNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  lang="en"
                  dir="ltr"
                  className="font-semibold tracking-wider text-white transition-colors hover:text-accent"
                >
                  EN
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <header className="swr-header sticky top-0 z-40 border-b bg-card">
        <div className="container-site flex h-16 items-center gap-4 lg:h-[76px] lg:gap-6">
          <Logo />

          <nav aria-label="منوی اصلی" className="hidden flex-1 lg:block">
            <ul className="flex items-center justify-center gap-1 xl:gap-3">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative flex h-[76px] items-center px-2.5 text-[15px] font-semibold text-foreground transition-colors after:absolute after:inset-x-2.5 after:bottom-0 after:h-[3px] after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ms-auto flex items-center gap-1 lg:ms-0 lg:gap-3">
            <HeaderSearch />
            <Link
              href="/market"
              className="hidden h-10 items-center gap-2 bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy md:inline-flex"
            >
              <BarChart3 aria-hidden="true" className="size-4 text-accent" />
              داده‌های بازار
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <MarketTicker />
    </>
  )
}
