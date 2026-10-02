import Link from 'next/link'
import { getCompanies, getMarketItems } from '@/lib/content'
import { mainNavigation, siteConfig, socialLinks } from '@/lib/data/site'
import type { NavItem } from '@/lib/types'
import { Logo } from './logo'

function FooterColumn({ title, links }: { title: string; links: NavItem[] }) {
  return (
    <div className="swr-footer-column">
      <h2 className="mb-4 text-sm font-bold text-white">{title}</h2>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  const marketLinks: NavItem[] = [
    { label: 'داشبورد بازار', href: '/market' },
    ...getMarketItems()
      .slice(0, 4)
      .map((item) => ({ label: `قیمت ${item.name}`, href: `/market#${item.id}` })),
  ]
  const companyLinks: NavItem[] = [
    { label: 'بانک اطلاعات شرکت‌ها', href: '/companies' },
    ...getCompanies(4).map((company) => ({
      label: company.name,
      href: `/companies/${company.slug}`,
    })),
  ]

  return (
    <footer className="swr-footer bg-navy text-white/65">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-12">
          <div id="about" className="col-span-2 md:col-span-4 lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-7">
              گزیده جهان فولاد رسانه تخصصی اطلاعات صنعت فولاد است؛ اخبار، تحلیل، داده‌های بازار و
              تحولات فناوری را برای مدیران، مهندسان و فعالان تجارت فولاد گردآوری و تحلیل می‌کند.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="شبکه‌های اجتماعی">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="inline-flex h-8 items-center border border-white/15 px-3 text-xs font-medium text-white/80 transition-colors hover:border-white hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="بخش‌ها" links={mainNavigation} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="بازار" links={marketLinks} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="شرکت‌ها" links={companyLinks} />
          </div>

          <address id="contact" className="not-italic lg:col-span-2">
            <h2 className="mb-4 text-sm font-bold text-white">تماس با ما</h2>
            <ul className="flex flex-col gap-2.5 text-sm leading-6">
              <li>{siteConfig.address}</li>
              <li>
                <a href="tel:+982188765432" className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} dir="ltr" className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            {'© ۱۴۰۵ گزیده جهان فولاد. تمامی حقوق محفوظ است. استفاده از مطالب با ذکر منبع مجاز است.'}
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/#privacy" className="hover:text-white">
                حریم خصوصی
              </Link>
            </li>
            <li>
              <Link href="/#terms" className="hover:text-white">
                شرایط استفاده
              </Link>
            </li>
            <li id="advertising">
              <Link href="/#contact" className="hover:text-white">
                تبلیغات
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
