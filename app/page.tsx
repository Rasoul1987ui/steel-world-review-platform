import { AnalysisSection } from '@/components/home/analysis-section'
import { CompaniesSection } from '@/components/home/companies-section'
import { HeroSection } from '@/components/home/hero-section'
import { InterviewsSection } from '@/components/home/interviews-section'
import { LatestNewsSection } from '@/components/home/latest-news-section'
import { TechnologySection } from '@/components/home/technology-section'
import { MarketDashboard } from '@/components/site/market-dashboard'
import { Newsletter } from '@/components/site/newsletter'
import {
  getAllCategories,
  getArticleBySlug,
  getArticlesByCategory,
  getArticlesBySlugs,
  getCompanies,
  getMarketItems,
  getMarketMeta,
  getNewsBriefs,
  getTechTopics,
} from '@/lib/content'
import { homepageConfig as config } from '@/lib/data/homepage'

export default function HomePage() {
  const hero = getArticleBySlug(config.heroSlug)!
  const news = getArticlesByCategory('news')
  const analysisFeature = getArticleBySlug(config.analysisFeatureSlug)!
  const techFeature = getArticleBySlug(config.technologyFeatureSlug)!
  const analysisSubcategories = getAllCategories().filter((category) =>
    ['analysis', 'report', 'outlook', 'special-reports'].includes(category.slug),
  )

  return (
    <>
      <HeroSection main={hero} secondary={getArticlesBySlugs(config.heroSecondarySlugs)} />
      <LatestNewsSection featured={news.slice(0, 2)} list={news.slice(2, 6)} briefs={getNewsBriefs()} />
      <MarketDashboard items={getMarketItems()} meta={getMarketMeta()} />
      <AnalysisSection
        feature={analysisFeature}
        list={getArticlesBySlugs(config.analysisListSlugs)}
        reports={getArticlesByCategory('special-reports', { limit: 4 })}
        subcategories={analysisSubcategories}
      />
      <CompaniesSection companies={getCompanies(config.companiesLimit)} />
      <TechnologySection
        feature={techFeature}
        list={getArticlesByCategory('technology', { exclude: [techFeature.slug], limit: 3 })}
        topics={getTechTopics()}
      />
      <InterviewsSection interviews={getArticlesByCategory('interviews', { limit: 3 })} />
      <Newsletter />
    </>
  )
}
