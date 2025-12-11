/* Index Page - Main landing page */
import { AppLogo } from '@/components/AppLogo'
import { HeroContent } from '@/components/HeroContent'
import { FeatureCarousel } from '@/components/FeatureCarousel'
import { ActionButtonGroup } from '@/components/ActionButtonGroup'

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl animate-fade-in">
      <AppLogo />
      <HeroContent />
      <FeatureCarousel />
      <ActionButtonGroup className="mt-8 md:mt-12" />
    </div>
  )
}

export default Index
