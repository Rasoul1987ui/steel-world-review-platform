import { NewsletterForm } from './newsletter-form'

export function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className="swr-newsletter bg-primary">
      <div className="container-site grid gap-6 py-12 md:py-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <p dir="ltr" className="text-end text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
            Newsletter
          </p>
          <h2 id="newsletter-title" className="mt-2 text-2xl font-extrabold text-white md:text-[30px]">
            عضو خبرنامه گزیده جهان فولاد شوید
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-white/75">
            مهم‌ترین اخبار، تحلیل‌ها و تحولات بازار فولاد را دریافت کنید.
          </p>
        </div>
        <div className="lg:col-span-6">
          <NewsletterForm />
          <p className="mt-3 text-xs text-white/55">
            ارسال هفتگی، هر شنبه صبح. لغو اشتراک در هر زمان امکان‌پذیر است.
          </p>
        </div>
      </div>
    </section>
  )
}
