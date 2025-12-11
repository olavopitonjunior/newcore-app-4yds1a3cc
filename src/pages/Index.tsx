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
        raysSpeed={0.3} // Moderate speed for dynamic flow
        lightSpread={4.5} // Wide spread to expand across screen
        rayLength={1.5} // Longer rays to reach further
        pulsating={true}
        fadeDistance={0.7} // Rays stay visible longer
        saturation={1.2}
        noiseAmount={0.35} // Turbulence for smoke effect
        distortion={0.4} // Distortion for smoke shape
        mouseInfluence={0}
        followMouse={false} // Static, no interaction
        numRays={80} // Dense rays for smoother smoke
        blendMode="normal" // Visible on white background
        className="h-screen w-full absolute top-[-200px] left-0 right-0 z-0 opacity-80 blur-[90px] pointer-events-none"
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
