/* Index Page - Main landing page */
import { AppLogo } from '@/components/AppLogo'
import { HeroContent } from '@/components/HeroContent'
import { FeatureCarousel } from '@/components/FeatureCarousel'
import { ActionButtonGroup } from '@/components/ActionButtonGroup'

const Index = () => {
  return (
    <div className="flex flex-col items-center w-full animate-fade-in pb-10 overflow-x-hidden">
      <div className="w-full max-w-4xl flex flex-col items-center px-4">
        <AppLogo />
        <HeroContent />
      </div>

      <FeatureCarousel />

      <div className="w-full max-w-4xl flex flex-col items-center px-4">
        <ActionButtonGroup className="mt-8 md:mt-12" />
      </div>
    </div>
  )
}

export default Index
