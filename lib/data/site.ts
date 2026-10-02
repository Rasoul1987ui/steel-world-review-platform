import type { Category, NavItem, TechTopic } from '@/lib/types'

export const siteConfig = {
  name: 'گزیده جهان فولاد',
  nameEn: 'Steel World Review',
  description:
    'رسانه تخصصی اخبار، تحلیل، داده‌های بازار و فناوری صنعت فولاد برای مدیران، مهندسان و فعالان تجارت فولاد.',
  email: 'info@steelworldreview.ir',
  phone: '۰۲۱-۸۸۷۶ ۵۴۳۲',
  address: 'تهران، خیابان ولیعصر، برج صنعت، طبقه ۱۲',
}

export const mainNavigation: NavItem[] = [
  { label: 'آخرین اخبار', href: '/category/news' },
  { label: 'تحلیل و گزارش', href: '/category/analysis' },
  { label: 'بازار فولاد', href: '/category/market' },
  { label: 'شرکت‌ها', href: '/companies' },
  { label: 'فناوری', href: '/category/technology' },
  { label: 'مصاحبه‌ها', href: '/category/interviews' },
]

export const utilityNavigation: NavItem[] = [
  { label: 'درباره ما', href: '/#about' },
  { label: 'تبلیغات', href: '/#advertising' },
  { label: 'تماس با ما', href: '/#contact' },
]

export const socialLinks: NavItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Telegram', href: 'https://telegram.org' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'X', href: 'https://x.com' },
]

export const categories: Category[] = [
  {
    slug: 'news',
    name: 'آخرین اخبار',
    nameEn: 'Latest News',
    description: 'تازه‌ترین رویدادهای صنعت فولاد ایران و جهان.',
  },
  {
    slug: 'market',
    name: 'بازار فولاد',
    nameEn: 'Steel Market',
    description: 'قیمت‌ها، معاملات و تحولات بازار محصولات فولادی و مواد اولیه.',
  },
  {
    slug: 'analysis',
    name: 'تحلیل',
    nameEn: 'Analysis',
    description: 'تحلیل‌های عمیق از روندهای بازار، سیاست‌گذاری و رقابت در صنعت فولاد.',
    includes: ['analysis', 'report', 'outlook', 'special-reports'],
  },
  {
    slug: 'report',
    name: 'گزارش',
    nameEn: 'Report',
    description: 'گزارش‌های میدانی و داده‌محور از زنجیره ارزش فولاد.',
  },
  {
    slug: 'outlook',
    name: 'چشم‌انداز بازار',
    nameEn: 'Market Outlook',
    description: 'پیش‌بینی کوتاه‌مدت و میان‌مدت قیمت و تقاضا.',
  },
  {
    slug: 'special-reports',
    name: 'گزارش‌های تخصصی',
    nameEn: 'Special Reports',
    description: 'گزارش‌های جامع پژوهشی برای تصمیم‌گیران صنعت.',
  },
  {
    slug: 'companies',
    name: 'شرکت‌ها',
    nameEn: 'Companies',
    description: 'اخبار و تحولات شرکت‌های فولادی و تأمین‌کنندگان تجهیزات.',
  },
  {
    slug: 'technology',
    name: 'فناوری',
    nameEn: 'Technology',
    description: 'فناوری تولید، متالورژی، اتوماسیون و کربن‌زدایی.',
  },
  {
    slug: 'interviews',
    name: 'مصاحبه‌ها',
    nameEn: 'Interviews',
    description: 'گفت‌وگو با مدیران، مهندسان و فعالان برجسته صنعت فولاد.',
  },
]

export const techTopics: TechTopic[] = [
  {
    slug: 'production',
    name: 'فناوری تولید فولاد',
    description: 'کوره بلند، احیای مستقیم و کوره قوس الکتریکی',
  },
  {
    slug: 'metallurgy',
    name: 'متالورژی',
    description: 'گریدهای نو، ریزساختار و کنترل کیفیت',
  },
  {
    slug: 'automation',
    name: 'اتوماسیون',
    description: 'کنترل فرایند، دوقلوی دیجیتال و هوش مصنوعی',
  },
  {
    slug: 'equipment',
    name: 'تجهیزات صنعتی',
    description: 'خطوط نورد، ریخته‌گری مداوم و جرثقیل‌ها',
  },
  {
    slug: 'energy',
    name: 'بهره‌وری انرژی',
    description: 'بازیابی حرارت، مدیریت برق و گاز',
  },
  {
    slug: 'decarbonization',
    name: 'کربن‌زدایی',
    description: 'هیدروژن، جذب کربن و فولاد سبز',
  },
]
