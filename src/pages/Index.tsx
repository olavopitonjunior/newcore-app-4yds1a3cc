/* Index Page - Main landing page */
import { AppLogo } from '@/components/AppLogo'
import { HeroContent } from '@/components/HeroContent'
import { FeatureCarousel } from '@/components/FeatureCarousel'
import { ActionButtonGroup } from '@/components/ActionButtonGroup'
import { LightRays } from '@/components/LightRays'

const Index = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-background animate-fade-in pb-10 overflow-x-hidden">
      {/* Visual Effect Background - Smoke Effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="hsl(348, 100%, 50%)" // Red smoke
        raysSpeed={0.2} // Slow moving smoke
        lightSpread={3.5} // Wide spread to cover top
        rayLength={1.2}
        pulsating={true}
        fadeDistance={0.5}
        saturation={1.2}
        noiseAmount={0.3} // High noise for turbulence
        distortion={0.3} // High distortion for smoke shape
        mouseInfluence={0}
        followMouse={false} // No interaction
        numRays={60} // Smooth out the effect
        className="h-[800px] w-full absolute top-[-250px] left-0 right-0 z-0 opacity-50 blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center px-4 pt-12 md:pt-16">
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
