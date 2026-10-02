'use client'

import { ArrowLeft, BarChart3, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { mainNavigation, utilityNavigation } from '@/lib/data/site'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="باز کردن منو"
        className="grid size-10 place-items-center text-foreground transition-colors hover:bg-muted"
      >
        <Menu aria-hidden="true" className="size-6" />
      </button>

      {open && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="منوی اصلی"
          className="fixed inset-0 z-50 flex flex-col bg-card animate-in fade-in duration-150"
        >
          <div className="container-site flex h-16 shrink-0 items-center justify-between border-b">
            <span className="text-lg font-extrabold">گزیده جهان فولاد</span>
            <button
              type="button"
              onClick={close}
              aria-label="بستن منو"
              className="grid size-10 place-items-center hover:bg-muted"
            >
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>

          <nav aria-label="منوی موبایل" className="container-site flex-1 overflow-y-auto py-4">
            <ul>
              {mainNavigation.map((item) => (
                <li key={item.href} className="border-b">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between py-4 text-lg font-bold"
                  >
                    {item.label}
                    <ArrowLeft aria-hidden="true" className="size-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/market"
              onClick={close}
              className="mt-6 flex h-12 items-center justify-center gap-2 bg-primary text-[15px] font-semibold text-primary-foreground"
            >
              <BarChart3 aria-hidden="true" className="size-4 text-accent" />
              داده‌های بازار فولاد
            </Link>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {utilityNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
