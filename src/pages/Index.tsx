/* Index Page - Main landing page */
import { AppLogo } from '@/components/AppLogo'
import { HeroContent } from '@/components/HeroContent'
import { FeatureCarousel } from '@/components/FeatureCarousel'
import { ActionButtonGroup } from '@/components/ActionButtonGroup'
import { LightRays } from '@/components/LightRays'

const Index = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-background animate-fade-in pb-10 overflow-x-hidden">
      {/* Visual Effect Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="hsl(348, 100%, 45%)"
        raysSpeed={0.3}
        lightSpread={1.5}
        rayLength={1.0}
        pulsating={false}
        fadeDistance={0.7}
        saturation={0.5}
        noiseAmount={0.05}
        distortion={0.02}
        mouseInfluence={0.05}
        followMouse={true}
        className="h-[600px] z-0"
      />

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center px-4">
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
