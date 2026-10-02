'use client'

import { Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function HeaderSearch() {
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="site-search-panel"
        aria-label={open ? 'بستن جست‌وجو' : 'جست‌وجو'}
        className="grid size-10 place-items-center text-foreground transition-colors hover:bg-muted hover:text-primary"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Search aria-hidden="true" className="size-5" />
        )}
      </button>

      {open && (
        <div
          id="site-search-panel"
          className="absolute inset-x-0 top-full border-y bg-card shadow-[0_12px_24px_-16px_rgba(23,32,42,0.25)]"
        >
          <form action="/search" role="search" className="container-site flex items-center gap-3 py-4">
            <label htmlFor="site-search" className="sr-only">
              جست‌وجو در اخبار و تحلیل‌ها
            </label>
            <Search aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              id="site-search"
              name="q"
              type="search"
              placeholder="جست‌وجو در اخبار، تحلیل‌ها، شرکت‌ها..."
              className="h-11 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-lg"
            />
            <button
              type="submit"
              className="h-10 shrink-0 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
            >
              جست‌وجو
            </button>
          </form>
        </div>
      )}
    </>
  )
}
