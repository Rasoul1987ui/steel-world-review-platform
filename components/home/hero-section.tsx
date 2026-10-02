import { HeroStory, SecondaryStory } from '@/components/site/story-cards'
import type { Article } from '@/lib/types'

export function HeroSection({ main, secondary }: { main: Article; secondary: Article[] }) {
  return (
    <section aria-label="خبر برگزیده" className="swr-hero-section container-site pt-6 md:pt-8 lg:pt-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8 lg:border-e lg:pe-10">
          <HeroStory article={main} />
        </div>
        <div className="lg:col-span-4">
          <h2 className="mb-4 border-t-2 border-foreground pt-3 text-sm font-extrabold">
            مهم‌ترین‌های امروز
          </h2>
          <ul className="grid gap-5 md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 lg:gap-0">
            {secondary.map((article) => (
              <li key={article.id} className="border-b pb-5 lg:py-5 lg:first:pt-0 lg:last:border-b-0">
                <SecondaryStory article={article} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
