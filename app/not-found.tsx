import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-site flex flex-col items-start gap-4 py-24">
      <p dir="ltr" className="text-sm font-bold tracking-[0.2em] text-accent">404</p>
      <h1 className="text-3xl font-extrabold">صفحه مورد نظر یافت نشد</h1>
      <p className="text-muted-foreground">ممکن است این مطلب جابه‌جا یا حذف شده باشد.</p>
      <Link href="/" className="bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-navy">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  )
}
