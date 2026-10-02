import Link from 'next/link'
import type { NavItem } from '@/lib/types'

interface PageHeaderProps {
  title: string
  eyebrow?: string
  description?: string
  breadcrumbs?: NavItem[]
  children?: React.ReactNode
}

export function PageHeader({ title, eyebrow, description, breadcrumbs = [], children }: PageHeaderProps) {
  return (
    <header className="swr-page-header border-b bg-card">
      <div className="container-site py-8 md:py-12">
        <nav aria-label="مسیر صفحه" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                صفحه اصلی
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link href={crumb.href} className="hover:text-primary">
                  {crumb.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <p dir="ltr" className="text-end text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase md:text-start">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-balance text-3xl font-extrabold md:text-[40px] md:leading-tight">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-7 text-muted-foreground md:text-base">
            {description}
          </p>
        )}
        {children}
      </div>
    </header>
  )
}
