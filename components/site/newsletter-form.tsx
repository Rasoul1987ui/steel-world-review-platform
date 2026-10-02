'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <p
        role="status"
        className="flex items-center gap-3 border border-white/20 bg-white/5 px-5 py-4 text-[15px] font-medium text-white"
      >
        <Check aria-hidden="true" className="size-5 shrink-0 text-accent" />
        عضویت شما ثبت شد. نخستین خبرنامه هفته آینده ارسال می‌شود.
      </p>
    )
  }

  return (
    <form
      className="swr-newsletter-form flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault()
        if (event.currentTarget.checkValidity()) setSubmitted(true)
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        نشانی ایمیل
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        dir="ltr"
        autoComplete="email"
        placeholder="email@company.com"
        className="h-12 min-w-0 flex-1 border border-white/25 bg-white px-4 text-start text-[15px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent"
      />
      <button
        type="submit"
        className="h-12 shrink-0 bg-accent px-7 text-[15px] font-bold text-accent-foreground transition-colors hover:bg-white"
      >
        عضویت در خبرنامه
      </button>
    </form>
  )
}
